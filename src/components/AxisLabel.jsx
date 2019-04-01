import React  from 'react';

export default (props) => {
    return (
        <text className="axis-title" transform="rotate(-90)" dy="1em"
              style={{textAnchor: 'middle'}}
              y={0}
              x={0 - props.height / 2}>
            {props.axisTitle}
        </text>
    )
};