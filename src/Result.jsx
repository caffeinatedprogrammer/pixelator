import React from 'react';
import './Result.css';

export default function Result(props) {
    const { data, width, height, hasBorder } = props;
    if (!data) return <div />;
    const rows = [];
    for (var i=0; i<height; i++) {
        rows.push([]);
        for (var j=0; j<width; j++) {
            const index = 4*(i*width+j);
            const pixel = data.slice(index, index+4);
            rows[i].push(
                <div key={`${i} ${j}`} style={{
                    position: 'relative',
                    width: `calc(100% / ${width})`,
                    paddingBottom: `calc(100% / ${width})`,
                    flex: "0 0 auto",
                }}>
                    <div style={{
                        position: 'absolute',
                        top: hasBorder ? '7.5%' : '0px',
                        left: hasBorder ? '7.5%' : '0px',
                        right: hasBorder ? '7.5%' : '0px',
                        bottom: hasBorder ? '7.5%' : '0px',
                        backgroundColor: `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3]})`,
                    }} />
                </div>
            )
        }
    }
    
    return (
        <div>
            {rows.map(((array, index) => 
                <div className="result-line" key={index.toString()}>{array}</div>      
            ))}
        </div>
    )
}