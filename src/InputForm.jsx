import React, { useCallback, useState, useRef } from "react";
import "./InputPage.css";
import Button from "./Button";
import SquareContainer from "./SquareContainer";
import SettingItem from "./SettingItem";
import { useSelector } from './hooks';

export default function InputForm({onSubmit}) {
    const {
        width: defaultWidth,
        initialColor: defaultInitialColor,
        initialEdge: defaultInitialEdge,
        iterationCount: defaultIterationCount,
        sampleDistance: defaultSampleDistance,
    } = useSelector((state) => state.settings);
    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const [tileWidthCount, setTileWidthCount] = useState(defaultWidth);
    const [initialColor, setInitialColor] = useState({
        nextIndex: defaultInitialColor.length,
        color: defaultInitialColor.map((value, index) => ({[index]: value})).reduce((a, b) => Object.assign({}, a, b), {}),
        id: new Array(defaultInitialColor.length).fill(0).map((value, index) => index),
    });
    const [initialEdge, setInitialEdge] = useState({
        nextIndex: defaultInitialEdge.length,
        edge: defaultInitialEdge.map((value, index) => ({[index]: value})).reduce((a, b) => Object.assign({}, a, b), {}),
        id: new Array(defaultInitialEdge.length).fill(0).map((value, index) => index),
    });
    const [imageData, setImageData] = useState();
    const [iterationCount, setIterationCount] = useState(defaultIterationCount);
    const [sampleDistance, setSampleDistance] = useState(defaultSampleDistance);
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
            nextIndex: prev.nextIndex +1,
            id: [...prev.id, prev.nextIndex],
            color: {...prev.color, [prev.nextIndex]: '#000000'},
        }));
    }, [setInitialColor]);
    const handleRemoveColor = useCallback((event) => {
        event.preventDefault();
        setInitialColor((prev) => {
            const prevId = prev.id;
            const lastId = prevId.pop();
            const prevColor = prev.color;
            delete prevColor.lastId;
            return {
                ...prev,
                color: prevColor,
                id: prevId,
            };
        });
    }, [setInitialColor]);
    const handleEdgeChange = useCallback((event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setInitialEdge((prev) => {
            const newEdge = Object.assign({}, prev.edge);
            newEdge[name] = value;
            return {
                ...prev, edge: newEdge,
            }
        });
    }, [setInitialEdge]);
    const handleAddEdge = useCallback((event) => {
        event.preventDefault();
        setInitialEdge((prev) => ({
            ...prev,
            nextIndex: prev.nextIndex +1,
            id: [...prev.id, prev.nextIndex],
            edge: {...prev.edge, [prev.nextIndex]: '#000000'},
        }));
    }, [setInitialEdge]);
    const handleRemoveEdge = useCallback((event) => {
        event.preventDefault();
        setInitialEdge((prev) => {
            const prevId = prev.id;
            const lastId = prevId.pop();
            const prevEdge = prev.edge;
            delete prevEdge.lastId;
            return {
                ...prev,
                edge: prevEdge,
                id: prevId,
            };
        });
    }, [setInitialEdge]);
    const handleIterationCountChange = useCallback((event) => {
        event.preventDefault();
        setIterationCount(event.target.value);
    }, []);
    const handleSampleDistanceChange = useCallback((event) => {
        event.preventDefault();
        setSampleDistance(event.target.value);
    }, []);
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        onSubmit && onSubmit(
            imageData,
            imageWidth,
            imageHeight,
            Number(tileWidthCount),
            Object.values(initialColor.color),
            Object.values(initialEdge.edge),
            Number(iterationCount),
            Number(sampleDistance),
        );
    }, [
        onSubmit,
        tileWidthCount,
        imageData,
        imageWidth,
        imageHeight,
        initialColor,
        initialEdge,
        iterationCount,
        sampleDistance
    ]);
    
    return (
        <SquareContainer
            other={<form className="form" onSubmit={handleSubmit}>
                <h3>Instructions:</h3>
                <span>Select an image with few colors and sufficiently wide margin.</span>
                <span>Choose the main colors in the image.</span>
                <span>Choose the color of the edge if necessary.</span>
                <span>Increase sample distance if the calculation is too slow.</span>
                <SettingItem name="Image">
                    <input className="hidden" ref={fileInputRef} type="file" onChange={handleFileInputChange} />
                    <Button onClick={handleFileButtonClick}>Choose an image</Button>
                </SettingItem>
                <SettingItem name="Tile width">
                    <input
                        type="number"
                        onChange={handleTileWidthCountChange}
                        value={tileWidthCount}
                    />
                </SettingItem>
                <SettingItem name="Iteration Count">
                    <input
                        type="number"
                        onChange={handleIterationCountChange}
                        value={iterationCount}
                    />
                </SettingItem>
                <SettingItem name="Sample Distance">
                    <input
                        type="number"
                        onChange={handleSampleDistanceChange}
                        value={sampleDistance}
                    />
                </SettingItem>
                <SettingItem name="Color" end={
                    <>
                        <Button onClick={handleAddColor}>+</Button>
                        <Button onClick={handleRemoveColor}>-</Button>
                    </>
                }>
                    {initialColor.id.map((_id) =>
                        <input
                            key={`color_${_id}`}
                            type="color"
                            value={initialColor.color[_id]}
                            name={_id}
                            onChange={handleColorChange}
                        />
                    )}
                </SettingItem>
                <SettingItem name="Edge" end={<Button onClick={handleAddEdge}>+</Button>}>
                    {initialEdge.id.map((_id) =>
                        <input
                            key={`edge_${_id}`}
                            type="color"
                            value={initialEdge.edge[_id]}
                            name={_id}
                            onChange={handleEdgeChange}
                        />
                    )}
                </SettingItem>
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