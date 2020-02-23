import React, { useCallback } from "react";
import InputForm from "./InputForm";
import { useTitle, useAction } from "./hooks";
import { toRGB } from "./util";

import { useHistory } from 'react-router-dom';

export default function InputPage(props) {
    const history = useHistory();
    const saveSettings = useAction('save_settings');
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
        saveSettings({
            data,
            imageWidth,
            imageHeight,
            width,
            initialColor,
            initialEdge,
            iterationCount,
            sampleDistance,
        });
        for (let i=0; i<data.length; i+=4) {
            const convertedPixel = toRGB(data.slice(i, i+4));
            data[i] = convertedPixel[0];
            data[i+1] = convertedPixel[1];
            data[i+2] = convertedPixel[2];
            data[i+3] = convertedPixel[3];
        }
        history.push({
            pathname: "/result",
        });
    }, [history, saveSettings]);
    
    useTitle("Pixelator");
    
    return (
        <InputForm onSubmit={onSubmit} />
    );
}