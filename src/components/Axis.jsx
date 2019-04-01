import React from 'react';
import * as d3    from 'd3';

export default class Axis extends React.Component {

    componentDidUpdate() {
        this.renderAxis();
    }

    renderAxis() {
        let node  = this.refs.axis;

        let axis;

        if (this.props.orient === 'bottom') {
            axis = d3.axisBottom(this.props.scale)
                //.tickFormat(d3.timeFormat("%Y"));

        } else {
            axis = d3.axisLeft(this.props.scale)
                .tickFormat(d3.timeFormat("%M:%S"));
        }

        d3.select(node).call(axis);
    }

    render() {

        return <g id={this.props.id} className="axis" ref="axis" transform={this.props.translate} >
        </g>
    }
}