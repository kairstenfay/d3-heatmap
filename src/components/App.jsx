import React       from 'react';
import HeatMap from './HeatMap';
import Legend from './Legend';
import '../App.css';
import Tooltip from '../components/Tooltip';
import * as d3 from "d3";
const parseMonth = d3.timeParse("%m");
const parseYear = d3.timeParse("%Y");

const styles = {
    width: Math.min(window.innerWidth, 700),
    height: Math.min(window.innerHeight - 100, 550),
    padding: 60,
};

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            styles: styles,
            xAxisTitle: 'Year',
            yAxisTitle: 'Month',
        };
        this.toggleToolTip = this.toggleToolTip.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json';

        fetch(url)
            .then(res => res.json())
            .then(jsonData => {

                for (let i = 0; i < jsonData.monthlyVariance.length; i++) {
                    let datum = jsonData.monthlyVariance[i];
                    jsonData.monthlyVariance[i].year = parseYear(datum.year);
                    jsonData.monthlyVariance[i].month = parseMonth(datum.month);
                }
                console.log(jsonData.monthlyVariance);

                this.setState({
                    baseTemperature: jsonData.baseTemperature,
                    data: jsonData.monthlyVariance,
                });
            })
            .catch(console.error)
    }

    toggleToolTip(e) {
        this.setState({
            attributes: e.target.attributes,
            showToolTip: !this.state.showToolTip, // todo d-r-y
        })
    }


    render() {

        return (
            <div id="App">
                <header className="App-header">
                    <h1 id="title">Monthly Global Land-Surface Temperature</h1>
                    <h2>1753 - 2015: base temperature 8.66℃</h2>
                </header>
                <div id="chart">
                    <HeatMap {...this.state} {...styles} toolTipAction={this.toggleToolTip} />
                    <Legend />
                </div>
                {/*<Tooltip attributes={this.state.attributes} showToolTip={this.state.showToolTip} {...styles} />*/}
            </div>
        )
    }
}


function toLowerCaseKeys(obj) {
    return Object.keys(obj).reduce(function(accum, key) {
        accum[key.toLowerCase()] = obj[key];
        return accum;
    }, {});
}