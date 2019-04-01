import React  from 'react';
import Axis   from './Axis';
import AxisLabel from './AxisLabel';

export default (props) => {

    const xSettings = {
        translate: `translate(0, ${props.height - props.padding})`,
        scale: props.xScale,
        orient: 'bottom',
        id: 'x-axis',
    };
    const ySettings = {
        translate: `translate(${props.padding}, 0)`,
        scale: props.yScale,
        orient: 'left',
        id: 'y-axis',
    };
    return (
        <g className="xy-axis">
            <Axis {...xSettings} {...props.styles} />
            <Axis {...ySettings} {...props.styles} />
            <AxisLabel {...props.styles} axisTitle={props.yAxisTitle} />
        </g>
    )
}