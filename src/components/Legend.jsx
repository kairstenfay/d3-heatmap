import React from 'react';

export default function Legend() {

    return (
        <div id="legend">
            Legend
            <br />
            <span id="doping" className="legend-dot" /> = Doping accusation
            <br />
            <span id="clean" className="legend-dot" /> = Clean record (no doping)
        </div>
    );
}
