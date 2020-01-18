import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import SquareContainer from './SquareContainer';
import Button from './Button';
import Result from './Result';
import ResultGuide from './ResultGuide';
import { getSimplifiedImage, getResult } from './util';
import { useTitle } from "./hooks";

export default function ResultPage(props) {
    const location = useLocation();
    const history = useHistory();
    const state = location.state;
    const {
        data,
        imageWidth,
        imageHeight,
        width,
        initialColor,
        initialEdge,
        iterationCount,
        sampleDistance,
    } = state;
    const [imageData, setImageData] = useState();
    
    useTitle("Pixelator | Result");
    useEffect(() => {
        const getImage = async () => {
            const image = await getSimplifiedImage(data, imageWidth, imageHeight, width, sampleDistance, initialEdge);
            const clustered = await getResult(image, initialColor, iterationCount);
            setImageData(clustered);
        };
        getImage();
    }, [
        data,
        imageWidth,
        imageHeight,
        width,
        initialColor,
        initialEdge,
        iterationCount,
        sampleDistance
    ]);
    
    const mapping = {};
    if (imageData) {
        for (var i=0; i<imageData.length; i+=4) {
            const colorString = `rgb(${imageData[i]}, ${imageData[i+1]}, ${imageData[i+2]})`;
            if (mapping[colorString]) {
                mapping[colorString]++;
            } else {
                mapping[colorString] = 1;
            }
        }
    }
    
    return (
        <>
            <SquareContainer
                square={
                    <Result
                        data={imageData}
                        width={width}
                        height={Math.floor(imageHeight/Math.floor(imageWidth/width))}
                    />
                }
                other={
                    <>
                        <Button onClick={history.goBack}>Go Back</Button>
                        <ResultGuide mapping={mapping} />
                    </>
                }
            />
        </>
    );
}