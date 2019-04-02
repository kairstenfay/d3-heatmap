import {scaleTime} from "d3-scale";
import * as d3 from "d3";
const parseYear = d3.timeParse("%Y");
const parseMonth = d3.timeParse("%m");

const xMax   = (data)  => {
    return d3.max(data, (d) => d.year);
};

const xMin = (data) => {
    return d3.min(data, (d) => d.year);
};

const yMin   = (data)  => {
    return d3.min(data, (d) => d.month);
};

const yMax   = (data)  => {
    return d3.max(data, (d) => d.month);
};

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props) => {

    let minX = xMin(props.data);
    minX = (minX) ? parseYear(minX.getFullYear() - 1) : minX;
    console.log("min x = " + minX);
    console.log("max x = " + xMax(props.data));

    return scaleTime()
        .domain([minX, xMax(props.data)])
        .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props) => {

    return scaleTime()
        .domain([yMin(props.data), yMax(props.data)])
        .range([props.height - props.padding, props.padding]);
};

export {xScale, yScale}