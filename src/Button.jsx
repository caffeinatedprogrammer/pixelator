import React from "react";

export default React.forwardRef((props, ref) => {
    return (
        <button ref={ref} {...props} className="button" />
    );
});