import React from 'react';

export default function DataRectangles(props) {

    return (
        <g id="rectangle-garden" onMouseOver={props.toolTipAction} onMouseOut={props.toolTipAction}>
            {props.data.map(renderRectangles(props))}
        </g>
    );
}

function renderRectangles(props) {

    return (coords, index) => {

        const rectangleProps = {
            x: props.xScale(coords.year),
            y: props.yScale(coords.month),
            width: 1,
            height: 40,
            key: index,
        };

        index < 4 && (console.log(rectangleProps));

        const fillColor = 'red';  // todo config

        return (
            <rect data-xvalue={coords.year} data-yvalue={coords.month} // todo: {...coords}
                       {...rectangleProps} fill={fillColor} />
        );
    };
}



