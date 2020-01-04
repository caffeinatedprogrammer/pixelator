import React from "react";

import "./SquareContainer.css";

export default function SquareContainer({square, other}) {
    return (
        <div className="square-container">
            <div className="square-other">{other}</div>
            <div className="square-block">{square}</div>
        </div>
    );
}