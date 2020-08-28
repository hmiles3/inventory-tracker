import React, { Component } from "react";
import CanvasJSReact from '../canvasjs.react';
import { Jumbotron } from 'reactstrap';
//import Dropdown from "../components/Dropdown";
import {  DropdownButton, Dropdown } from 'react-bootstrap';
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
            <Jumbotron>
                <h1 className="display-3">Choose a Chart Type</h1>
                <p className="lead">Choose the item you would like to view the data for:</p>
                <hr className="my-2" />
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
            </Jumbotron>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
        );
        
	}
  }

  export default Data