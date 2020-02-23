import React from 'react';

import "./SettingItem.css";

export default function SettingItem({name, children, end}) {
    return (
        <div className="flex-container">
            <p className="flex-fixed setting-name">{name}</p>
            <div className="flex-expand">{children}</div>
            <div className="flex-fixed setting-end">{end}</div>
        </div>
    );
}