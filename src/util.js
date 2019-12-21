export function averageData(data) {
    var sumR = 0;
    var sumG = 0;
    var sumB = 0;
    var sumAlpha = 0;
    const length = data.length / 4;
    data.forEach((value, index) => {
        switch (index % 4) {
            case 0:
                sumR += value;
                break;
                
            case 1:
                sumG += value;
                break;
                
            case 2:
                sumB += value;
                break;
                
            case 3:
                sumAlpha += value;
                break;
                
            default:
                break;
        }
    });
    return [sumR, sumG, sumB, sumAlpha].map((value) => value/length);
}

export function getMedian(data) {
    // rValue means r in rgba, not related to l-values and r-values
    const rValues = new Array(256).fill(0);
    const gValues = new Array(256).fill(0);
    const bValues = new Array(256).fill(0);
    const aValues = new Array(256).fill(0);
    data.forEach((value, index) => {
        switch (index % 4) {
            case 0:
                rValues[value]++;
                break;
                
            case 1:
                gValues[value]++;
                break;
                
            case 2:
                bValues[value]++;
                break;
                
            case 3:
                aValues[value]++;
                break;
                
            default:
                break;
        }
    });
    return [rValues, gValues, bValues, aValues].map((array) => {
        let count = 0;
        for (let i=0; i<256; i++) {
            count += array[i];
            if (count >= data.length / 8) {
                return i;
            }
        }
        return 255;
    })
}

export async function getSimplifiedImage(data, imageWidth, imageHeight, width) {
    const tileSize = Math.floor(imageWidth/width);
    const height = Math.floor(imageHeight/tileSize);
    const newData = new Array(width*height);
    // truncate image at bottom
    for (var i=0; i<height; i++) {
        for (var j=0; j<width; j++) {
            // find out which tile the pixel belongs to
            for (var k=i*tileSize; k<(i+1)*tileSize; k++) {
                for (var l=j*tileSize; l<(j+1)*tileSize; l++) {
                    if (!newData[i*width+j]) {
                        newData[i*width+j] = [];
                    }
                    const pixel = k*imageWidth + l;
                    newData[i*width+j].push(data.slice(4*pixel, 4*pixel+4));
                }
            }
        }
    }
    return newData.map((array) => getMedian(array.reduce((a, b) => Array.from(a).concat(Array.from(b)))))
                  .reduce((a, b) => a.concat(b));
}

export async function getClusteredImage(data, initialColor) {
    const matrix = [];
    const toRGB = (pixel) => {
        const alpha = pixel[3]/255;
        return [pixel[0]*alpha, pixel[1]*alpha, pixel[2]*alpha, 255];
    };
    for (var i=0; i<data.length; i+=4) {
        matrix.push(toRGB(data.slice(i, i+4)));
    }
    return new Promise((resolve) => resolve(clusterize(matrix, (x, y) => {
        let sum = 0;
        for (let i=0; i<3; i++) {
            sum += (x[i] - y[i]) * (x[i] - y[i]);
        }
        return sum;
    }, initialColor)));
}

export async function getResult(data, initialColor) {
    const { centroid, types } = await getClusteredImage(data, initialColor);
    for (const index in types) {
        data.splice(index*4, 4, ...centroid[types[index]]);
    }
    return await data;
}

const repeat = (fn, times) => {
    for (let i=0; i<times; i++) {
        fn(i);
    }
};

export function clusterize(matrix, distance, initialVector) {
    let centroid = initialVector;
    const types = matrix.map((color, index) => 0);
    const findType = (item, centroid, distance) => {
        let minIndex = -1;
        let minValue = -1;
        centroid.forEach((c, index) => {
            const dist = distance(item, c);
            if (dist < minValue || minValue === -1) {
                minIndex = index;
                minValue = dist;
            }
        });
        return minIndex;
    };
    const k = initialVector.length;
    repeat(() => {
        const newCentroidSum = new Array(k).fill(new Array(initialVector[0].length).fill(0));
        const newCentroidCount = new Array(k).fill(0);
        for (let i=0; i<matrix.length; i++) {
            const type = findType(matrix[i], centroid, distance);
            types[i] = type;
            newCentroidSum[type] = newCentroidSum[type].map((value, index) => value + matrix[i][index]);
            newCentroidCount[type]++;
        }
        centroid = newCentroidSum.map((value, type) => value.map((color) => color / Math.max(1, newCentroidCount[type])));
    }, 100);
    return { centroid, types };
}
