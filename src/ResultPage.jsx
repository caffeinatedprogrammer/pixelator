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
        <div className="container">
            <div className="left">
                <div style={{
                    width: `${full}px`,
                    height: `${full}px`,
                    }}
                >
                    <Result data={imageData} width={width} height={Math.floor(imageHeight/Math.floor(imageWidth/width))} />
                </div>
                {Object.keys(mapping).map((color) =>
                    <div>
                        <div style={{
                            backgroundColor: color, width: '50px', height: '50px', border: '1px solid black', display: 'inline-block'
                        }} />
                        <span>{mapping[color]}</span>
                    </div>
                )}
            </div>
        </div>
    );
}