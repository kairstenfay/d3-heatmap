import React from 'react';

export default (props) => {
    console.log(props.attributes);
    
    if (props.attributes && props.attributes['data-xvalue']) {
        console.log(props.attributes);

        const year = props.attributes['data-xvalue'].nodeValue;
        const time = props.attributes['data-yvalue'].nodeValue;
        const name = props.attributes['data-name'].nodeValue;
        const doping = props.attributes['data-doping'].nodeValue;

        const fullYear = new Date(year).getFullYear();
        const fullTime = new Date(time).getMinutes() + ":" + new Date(time).getSeconds();

        const cx = props.attributes.cx.nodeValue;
        const cy = props.attributes.cy.nodeValue;

        const display = (props.showToolTip) ? 'block' : 'none';
        return (
            <div id="tooltip" data-year={year}
                 style={{left: Math.floor(cx) + 2 * props.padding + 'px',
                     top: Math.floor(cy) - 0.3 * props.padding + 'px',
                     position: 'absolute',
                     display: display,
                     backgroundColor: (doping === "") ? '#9c99ff': '#ff9999',  // todo config, d-r-y
                 }}
            >
                {fullYear}
                <br/>
                {name}
                <br/>
                {fullTime}
                <br/>
                {doping}
            </div>
        );
    } else {
        return (
            <div/>
        )
    }
}
