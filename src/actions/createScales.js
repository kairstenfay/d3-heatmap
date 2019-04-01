import {scaleTime} from "d3-scale";
import * as d3 from "d3";
const parseYear = d3.timeParse("%Y");
const parseTime = d3.timeParse("%M:%S");

const xMax   = (data)  => {
    return d3.max(data, (d) => d.year); // d.getFullyear());
};

const xMin = (data) => {
    return d3.min(data, (d) => d.year); // getFullyear());
};

const yMin   = (data)  => {
    return d3.min(data, (d) => d.month); // d.getTime());
};

const yMax   = (data)  => {
    return d3.max(data, (d) => d.month); // d.getTime());
};

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props) => {

    let minX = xMin(props.data);
    console.log("min x = " + minX);
    console.log("max x = " + xMax(props.data));
    // minX = (minX) ? parseYear(minX.getFullYear() - 1) : minX;

    return scaleTime()
        .domain([minX, xMax(props.data)])
        .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props) => {

    let minY = yMin(props.data);

    // let minY = new Date(yMin(props.data)).getMinutes() + ':00';
    // console.log(minY);
    // minY = parseTime(minY);

    return scaleTime()
        .domain([minY, yMax(props.data)])
        .range([props.height - props.padding, props.padding]);
};

export {xScale, yScale}