import React, { useCallback } from "react";
import InputForm from "./InputForm";
import { useTitle } from "./hooks";
import { toRGB } from "./util";

import { useHistory } from 'react-router-dom';

export default function InputPage(props) {
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
    const onSubmit = useCallback(
        (
            data,
            imageWidth,
            imageHeight,
            width,
            initialColor,
            initialEdge,
            iterationCount,
            sampleDistance
        ) => {
        for (let i=0; i<data.length; i+=4) {
            const convertedPixel = toRGB(data.slice(i, i+4));
            data[i] = convertedPixel[0];
            data[i+1] = convertedPixel[1];
            data[i+2] = convertedPixel[2];
            data[i+3] = convertedPixel[3];
        }
            
        history.push({
            pathname: "/result",
            state: {
                data,
                imageWidth,
                imageHeight,
                width,
                initialColor: convert(initialColor),
                initialEdge: convert(initialEdge),
                iterationCount,
                sampleDistance,
            },
        });
    }, [history, convert]);
    
    useTitle("Pixelator");
    
    return (
        <div className="container">
            <InputForm onSubmit={onSubmit} />
        </div>
    );
}