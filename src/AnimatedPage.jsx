import React, {
    useCallback,
    useEffect,
    useState,
    useRef
} from "react";
import { useLocation } from "react-router-dom";
import "./AnimatedPage.css";

const AnimatedPage = ({children}) => {
    const [fadingState, setFadingState] = useState(null);
    const location = useLocation();
    useEffect(() => {
        setFadingState("fading_in");
        const id = setTimeout(() => {
            setFadingState("faded_in");
        }, 500);
        return () => {
            clearTimeout(id);
        };
    }, [location]);
    const fadeOutTimeoutRef = useRef();
    const startNavigation = useCallback((callback) => {
        setFadingState("fading_out");
        fadeOutTimeoutRef.current = setTimeout(() => {
            callback();
        }, 500);
    }, [fadeOutTimeoutRef]);
    useEffect(() => {
        return () => {
            if (fadeOutTimeoutRef.current) {
                clearTimeout(fadeOutTimeoutRef.current);
            }
        };
    }, [location]);
    let className = null;
    switch (fadingState) {
        case null:
        case "fading_out":
            className = "fading";
            break;
        default:
        case "fading_in":
            className = "faded";
            break;
    }
    return (
        <div className={`full ${className}`}>
            {children(startNavigation)}
        </div>
    );
}

export default AnimatedPage;