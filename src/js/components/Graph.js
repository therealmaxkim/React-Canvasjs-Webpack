import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var readings = [
    {x: new Date('2020-03-04T21:12:55.618Z'), y: 10}, 
    {x: new Date('2020-03-04T21:13:55.618Z'), y: 13}, 
    {x: new Date('2020-03-04T21:14:55.618Z'), y: 18}, 
    {x: new Date('2020-03-04T21:15:54.618Z'), y: 20}, 
    {x: new Date('2020-03-04T21:16:55.618Z'), y: 17}, 
    {x: new Date('2020-03-04T21:17:56.618Z'), y: 10}, 
    {x: new Date('2020-03-04T21:18:55.618Z'), y: 13}, 
    {x: new Date('2020-03-04T21:19:53.618Z'), y: 18}, 
    {x: new Date('2020-03-04T21:20:55.618Z'), y: 20}, 
    {x: new Date('2020-03-04T21:21:55.618Z'), y: 17}
]; 

var xDate = readings[readings.length-1]['x']; //grab the last date 
var yTemp = 15;
var updateInterval = 60000; //update every minute

class Graph extends Component {
    constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
    }
    AddMinutesToDate(date, minutes) {
        return new Date(date.getTime() + minutes * 60000);
    }
	updateChart() {
        yTemp = yTemp +  Math.round(5 + Math.random() *(-5-5));
        xDate = this.AddMinutesToDate(xDate, 1);
		readings.push({x: xDate,y: yTemp});
		if (readings.length > 10) {
			readings.shift();
		}
		this.chart.render();
	}
	render() {
		const options = {
			title :{
				text: "Past Hour Temperature Readings"
            },
            axisX:{
                title: "Time",
                interval: 1,
                intervalType: "minute"
            },
            axisY: {
                title: "Temperature in Celsius"
            },
			data: [{
				type: "line",
				dataPoints : readings
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}


export default Graph;