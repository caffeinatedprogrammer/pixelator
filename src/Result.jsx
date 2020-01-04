import React from 'react';
import './Result.css';

export default function Result(props) {
    const { data, width, height } = props;
    if (!data) return <div />;
    const rows = [];
    for (var i=0; i<height; i++) {
        rows.push([]);
        for (var j=0; j<width; j++) {
            const index = 4*(i*width+j);
            const pixel = data.slice(index, index+4);
            rows[i].push(
                <div key={`${i} ${j}`} style={
                    {
                        backgroundColor: `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3]})`,
                        width: `calc(100% / ${width})`,
                        paddingBottom: `calc(100% / ${width})`,
                        flex: "0 0 auto",
                    }
                } />
            )
        }
    }
    
    return (
        <div className="result-container">
            {rows.map(((array, index) => 
                <div className="result-line" key={index.toString()}>{array}</div>      
            ))}
        </div>
    )
}