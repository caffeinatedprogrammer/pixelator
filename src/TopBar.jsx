import React from "react";

import { Link } from "react-router-dom";

import "./TopBar.css";

export default function TopBar() {
    return (
        <div className="top-bar">
            <p className="title">Pixelator</p>
            <Link to="/">
                <p className="link">Home</p>
            </Link>
            <Link to="/about">
                <p className="link">About</p>
            </Link>
        </div>
    )
}