import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Result from './Result';
import { getSimplifiedImage, getResult } from './util';

export default function ResultPage(props) {
    const location = useLocation();
    const state = location.state;
    const { data, imageWidth, imageHeight, width, k } = state;
    const [imageData, setImageData] = useState();
    
    useEffect(() => {
        const getImage = async () => {
            const image = await getSimplifiedImage(data, imageWidth, imageHeight, width);
            const clustered = await getResult(image, k);
            setImageData(clustered);
        };
        getImage();
    }, [data, imageWidth, imageHeight, width, k]);
    
    return (
        <Result data={imageData} width={width} height={Math.floor(imageHeight/Math.floor(imageWidth/width))} />
    );
}