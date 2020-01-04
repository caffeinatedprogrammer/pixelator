import React, { useCallback, useState, useRef } from "react";
import "./InputPage.css";
import Button from "./Button";
import SquareContainer from "./SquareContainer";
import SelectFilePlaceholder from "./SelectFilePlaceholder";

export default function InputForm({onSubmit}) {
    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const [tileWidthCount, setTileWidthCount] = useState(20);
    const [initialColor, setInitialColor] = useState({
        nextIndex: 5,
        color: {1: '#000000', 2: '#FFFFFF', 3: '#FFFF00', 4: '#FF0000'},
        id: [1, 2, 3, 4]
    });
    const [imageData, setImageData] = useState();
    const canvasRef = useRef();
    const fileInputRef = useRef();
    const handleFileButtonClick = useCallback((event) => {
        event.preventDefault();
        fileInputRef.current.click();
    }, [fileInputRef]);
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
        event.preventDefault();
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
        event.preventDefault();
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
        <SquareContainer
            other={<form className="form" onSubmit={handleSubmit}>
                <input className="hidden" ref={fileInputRef} type="file" onChange={handleFileInputChange} />
                <Button onClick={handleFileButtonClick}>Choose an image</Button>
                    <div>
                    <label>Width:</label>
                    <input
                        type="number"
                        onChange={handleTileWidthCountChange}
                        value={tileWidthCount}
                    />
                </div>
                <div>
                    <Button onClick={handleAddColor}>Add color</Button>
                    {initialColor.id.map((_id) =>
                        <input
                            key={_id.toString()}
                            type="color"
                            value={initialColor.color[_id]}
                            name={_id}
                            onChange={handleColorChange}
                        />
                    )}
                </div>
                <Button disabled={!imageData} type="submit">
                    Submit
                </Button>
            </form>}
            square={
                <div className="overflow-scroll full">
                    <canvas
                        ref={canvasRef}
                        width={imageWidth.toString()}
                        height={imageHeight.toString()}
                    />
                </div>
            }
        />    
    );
}