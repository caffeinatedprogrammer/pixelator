import React, { useCallback, useState, useRef } from "react";
import "./InputPage.css";

export default function InputForm({onSubmit}) {
    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const [tileWidthCount, setTileWidthCount] = useState(20);
    const [initialColor, setInitialColor] = useState({ nextIndex: 4, color: {1: '#000000', 2: '#FFFFFF', 3: '#FFFF00', 4: '#FF0000'}, id: [1,2,3] });
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
    const handleColorChange = useCallback((event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInitialColor((prev) => {
            const newColor = Object.assign({}, prev.color);
            newColor[name] = value;
            return {
                ...prev, color: newColor,
            }
        });
    }, [setInitialColor]);
    const handleAddColor = useCallback((event) => {
        setInitialColor((prev) => ({
            ...prev,
            nextIndex: prev.nextIndex + 1,
            id: [...prev.id, prev.nextIndex],
            color: {...prev.color, [prev.nextIndex]: '#000000'},
        }));
    }, [setInitialColor]);
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        onSubmit && onSubmit(imageData, imageWidth, imageHeight, Number(tileWidthCount), Object.values(initialColor.color));
    }, [onSubmit, tileWidthCount, imageData, imageWidth, imageHeight, initialColor]);
    
    return (
        <>
            <div>
                <input type="file" onChange={handleFileInputChange} />
                {"Width:"}
                <input
                    type="number"
                    onChange={handleTileWidthCountChange}
                    value={tileWidthCount}
                />
                <button onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            <div>
                <button onClick={handleAddColor}>Add color</button>
                {initialColor.id.map((_id) => <input key={_id.toString()} type="color" value={initialColor.color[_id]} name={_id} onChange={handleColorChange} />)}
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