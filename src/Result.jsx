import React from 'react';

export default function Result(props) {
    const { data, width, height} = props;
    if (!data) return <div />;
    const rows = [];
    for (var i=0; i<height; i++) {
        rows.push([]);
        for (var j=0; j<width; j++) {
            const index = 4*(i*width+j);
            const pixel = data.slice(index, index+4);rows[i].push(
                <div key={`${i} ${j}`} style={
                    {
                        backgroundColor: `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3]})`,
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        margin: "2px"
                    }
                } />
            )
        }
    }
    
    return (
        <div>
            {rows.map(((array, index) => 
                <div key={index.toString()}>{array}</div>      
            ))}
        </div>
    )
}