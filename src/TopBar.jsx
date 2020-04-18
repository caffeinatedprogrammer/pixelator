import React, { useCallback } from "react";

import { useHistory } from "react-router-dom";

import "./TopBar.css";

export default function TopBar({startNavigation}) {
    const history = useHistory();
    const startNavigatingToHome = useCallback((event) => {
        event.preventDefault();
        const navigate = () => {
            history.push({
                pathname: "/",
            });
        };
        startNavigation(navigate);
    }, [startNavigation, history]);
    const startNavigatingToAbout = useCallback((event) => {
        event.preventDefault();
        const navigate = () => {
            history.push({
                pathname: "/about",
            });
        };
        startNavigation(navigate);
    }, [startNavigation, history]);
    return (
        <div className="top-bar">
            <p className="title">Pixelator</p>
            <a href="/" onClick={startNavigatingToHome}>
                <p className="link">Home</p>
            </a>
            <a href="/about" onClick={startNavigatingToAbout}>
                <p className="link">About</p>
            </a>
        </div>
    )
}