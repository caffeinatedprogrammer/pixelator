import React, { useCallback, useState, useRef } from "react";
import "./InputPage.css";

export default function InputForm({onSubmit}) {
    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const [tileWidthCount, setTileWidthCount] = useState(20);
    const [k, setK] = useState(5);
    const [imageData, setImageData] = useState();
    const canvasRef = useRef();
    const handleFileInputChange = useCallback((event) => {
        const reader = new FileReader();
        reader.onload = () => image.src = reader.result;
        reader.readAsDataURL(event.target.files[0]);
        const image = new Image();
        image.onload = () => {
            setImageWidth(image.width);
            setImageHeight(image.height);
            if (canvasRef.current) {
                const context = canvasRef.current.getContext('2d');
                context.drawImage(image, 0, 0, image.width, image.height);
                setImageData(context.getImageData(0, 0, image.width, image.height).data);
            }
        };
    }, [canvasRef, setImageData, setImageWidth, setImageHeight]);
    const handleTileWidthCountChange = useCallback((event) => {
        setTileWidthCount(event.target.value);
    }, [setTileWidthCount]);
    const handleKChange = useCallback((event) => {
        setK(event.target.value);
    }, [setK]);
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        onSubmit && onSubmit(imageData, imageWidth, imageHeight, Number(tileWidthCount), k);
    }, [onSubmit, tileWidthCount, imageData, imageWidth, imageHeight, k]);
    
    return (
        <>
            <div className="container">
                <input type="file" onChange={handleFileInputChange} />
                <input
                    type="number"
                    onChange={handleTileWidthCountChange}
                    value={tileWidthCount}
                />
                <input
                    type="number"
                    onChange={handleKChange}
                    value={k}
                />
                <button onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            <div>
                <canvas
                    ref={canvasRef}
                    width={imageWidth.toString()}
                    height={imageHeight.toString()}
                />
            </div>
        </>    
    );
}