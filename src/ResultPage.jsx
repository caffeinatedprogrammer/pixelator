import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import SquareContainer from './SquareContainer';
import Button from './Button';
import Result from './Result';
import ResultGuide from './ResultGuide';
import { getSimplifiedImage, getResult } from './util';
import { useTitle, useSelector } from "./hooks";

export default function ResultPage(props) {
    const history = useHistory();
    const convert = useCallback((initialColor) => {
        return initialColor.map((color) => {
            return [
                parseInt(color.substr(1,2), 16),
                parseInt(color.substr(3,2), 16),
                parseInt(color.substr(5,2), 16),
                255,
            ];
        });
    }, []);
    const {
        data,
        imageWidth,
        imageHeight,
        width,
        initialColor: rawInitialColor,
        initialEdge: rawInitialEdge,
        iterationCount,
        sampleDistance,
    } = useSelector((state) => state.settings);
    const initialColor = useMemo(() => convert(rawInitialColor), [convert, rawInitialColor]);
    const initialEdge = useMemo(() => convert(rawInitialEdge), [convert, rawInitialEdge]);
    const [imageData, setImageData] = useState();
    
    useTitle("Pixelator | Result");
    useEffect(() => {
        const getImage = async () => {
            const image = await getSimplifiedImage(data, imageWidth, imageHeight, width, sampleDistance, initialEdge);
            const clustered = await getResult(image, initialColor, iterationCount);
            setImageData(clustered);
        };
        data && getImage();
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
        data ? 
            <SquareContainer
                square={
                    <Result
                        data={imageData}
                        width={width}
                        height={Math.floor(imageHeight/Math.floor(imageWidth/width))}
                    />
                }
                other={
                    <div className="normal-page-padding">
                        <div className="dummy-height" />
                        <ResultGuide mapping={mapping} />
                    </div>
                }
            />
        :
            <Redirect to="/" />
    );
}