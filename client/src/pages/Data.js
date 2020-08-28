import React, { Component } from "react";
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Data extends Component {	
    render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Orders served per container"
			},
			axisY: {
				title: "Orders",
			},
			axisX: {
				title: "Container",
				prefix: "C",
				interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "Container {x}: {y} orders",
				dataPoints: [
                    { x: 1, y: 30 },
                    { x: 2, y: 35 },
                    { x: 3, y: 33 }
				]
			}]
		}
		return (
		<div>
            <h2>Choose the item you would like to view the data for:</h2>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
        );
        
	}
  }

  export default Data