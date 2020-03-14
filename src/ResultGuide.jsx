import React from "react";

import "./ResultGuide.css";

export default function ResultGuide({mapping}) {
    return (
        <div className="result-guide-container normal-page-padding">
            {Object.keys(mapping).map((color) =>
                <div
                    id={color.toString()}
                    key={color.toString()}
                    className="result-guide-item"
                >
                    <div style={{
                        backgroundColor: color,
                        width: "50px",
                        height: "50px",
                        minWidth: "50px",
                        minHeight: "50px",
                        border: "1px solid black",
                        marginRight: "8px",
                    }}/>
                    <label htmlFor={color.toString()}>{mapping[color]}</label>
                </div>
            )}
        </div>
    );
}