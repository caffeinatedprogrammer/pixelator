import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Result from './Result';
import { getSimplifiedImage, getResult } from './util';

export default function ResultPage(props) {
    const location = useLocation();
    const state = location.state;
    const { data, imageWidth, imageHeight, width, initialColor } = state;
    const [imageData, setImageData] = useState();
    
    useEffect(() => {
        const getImage = async () => {
            const image = await getSimplifiedImage(data, imageWidth, imageHeight, width);
            const clustered = await getResult(image, initialColor);
            setImageData(clustered);
        };
        getImage();
    }, [data, imageWidth, imageHeight, width, initialColor]);
    
    const full = Math.min(window.innerWidth, window.innerHeight) - 80;
    
    return (
        <div className="container">
            <div className="left" style={{
                width: `${full}px`,
                height: `${full}px`,
                }}
            >
                <Result data={imageData} width={width} height={Math.floor(imageHeight/Math.floor(imageWidth/width))} />
            </div>
        </div>
    );
}