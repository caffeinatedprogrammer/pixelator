import React from "react";

export default React.forwardRef((props, ref) => {
    const {
        type,
        ...others
    } = props;

    return (
        <button type={type || "button"} ref={ref} {...others} className="button rounded" />
    );
});