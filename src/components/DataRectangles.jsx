import React from 'react';

export default function DataCircles(props) {

    return (
        <g id="circle-garden" onMouseOver={props.toolTipAction} onMouseOut={props.toolTipAction}>
            {props.data.map(renderCircles(props))}
        </g>
    );
}

function renderCircles(props) {
    return (coords, index) => {

        const circleProps = {
            cx: props.xScale(coords.Year),
            cy: props.yScale(coords.Time),
            r: 6,
            key: index,
        };

        const fillColor = (coords.Doping === "") ? 'blue': 'red';  // todo config

        return <circle className="dot" data-xvalue={coords.Year}
                       data-yvalue={coords.Time}  data-doping={coords.Doping}
                        data-name={coords.Name} // todo: {...coords}
                       {...circleProps} fill={fillColor}
                       opacity="0.5" />;
    };
}



