import React, { Component } from "react";
import CanvasJSReact from '../canvasjs.react';
import { Jumbotron } from 'reactstrap';
import Dropdown from "../components/Dropdown";
// import graphs from "./graphs.json";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Data extends Component {
	state={
		search: "",
		order : [ 
			{name:"Ginger Champagne", id:0},
			{name:"Potato and Cheese Frittata", id:1},
			{name:"Eggnog Thumbprints", id: 2},
			{name:"Succulent Pork Roast", id: 3},
			{name:"Irish Champ", id: 4},
			{name:"Chocolate-Cherry Thumbprints", id: 5},
			{name:"Mean Woman Pasta", id: 6},
			{name:"Hot Spiced Cider", id: 7},
			{name:"Isa's Cola de Mono", id: 8},
			{name:"Amy's Barbecue Chicken Salad", id: 9}
		],
		dataPoints:  [
			{ x: 1, y: 30 },
			{ x: 2, y: 35 },
			{ x: 3, y: 33 }
		]
	};

	updateChart = event => {
		event.preventDefault();
		//based on the title go ahead and update the datapoints
		//alert(graphs[0].title)
		var result = this.state.dataPoints.concat()
		var length = result.length
		// var newY = this.state.dataPoints[length]
		result[length-1].y = result[length-1].y + 1
		console.log(result[length-1].y)
		// const btnType = event.target.value;
		this.setState({
			dataPoints: result
		})
    }

    handleBtnClick = event => {
		event.preventDefault();
		const btnType = event.target.value;
		this.setState({
			currId: btnType
		})
    }
    render() {
		const options = [
        {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Ginger Champagne"
			},
			axisY: {
				title: "Orders",
			},
			axisX: {
				title: "Day",
				interval: 1
			},
			data: [{
				type: "spline",
				toolTipContent: "Day {x}: {y} orders",
				dataPoints: this.state.dataPoints
			}]
        },
        {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Potato and Cheese Frittata"
			},
			axisY: {
				title: "Orders",
			},
			axisX: {
				title: "Day",
				interval: 1
			},
			data: [{
				type: "spline",
				toolTipContent: "Day {x}: {y} orders",
				dataPoints: [
                    { y: 0 },
                    { y: 30 },
                    { y: 20 }
				]
			}]
        },
        {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Eggnog Thumbprints"
			},
			axisY: {
				title: "Orders",
			},
			axisX: {
				title: "Day",
				interval: 1
			},
			data: [{
				type: "spline",
				toolTipContent: "Day {x}: {y} orders",
				dataPoints: [
                    { y: 0 },
                    { y: 30 },
                    { y: 20 }
				]
			}]
        },
        {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Succulent Pork Roast"
			},
			axisY: {
				title: "Orders",
			},
			axisX: {
				title: "Day",
				interval: 1
			},
			data: [{
				type: "spline",
				toolTipContent: "Day {x}: {y} orders",
				dataPoints: [
                    { y: 0 },
                    { y: 30 },
                    { y: 20 }
				]
			}]
        },
        {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Irish Champ"
			},
			axisY: {
				title: "Orders",
			},
			axisX: {
				title: "Day",
				interval: 1
			},
			data: [{
				type: "spline",
				toolTipContent: "Day {x}: {y} orders",
				dataPoints: [
                    { y: 0 },
                    { y: 30 },
                    { y: 20 }
				]
			}]
        },
        {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Chocolate-Cherry Thumbprints"
			},
			axisY: {
				title: "Orders",
			},
			axisX: {
				title: "Day",
				interval: 1
			},
			data: [{
				type: "spline",
				toolTipContent: "Day {x}: {y} orders",
				dataPoints: [
                    { y: 0 },
                    { y: 30 },
                    { y: 20 }
				]
			}]
        },
        {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Mean Woman Pasta"
			},
			axisY: {
				title: "Orders",
			},
			axisX: {
				title: "Day",
				interval: 1
			},
			data: [{
				type: "spline",
				toolTipContent: "Day {x}: {y} orders",
				dataPoints: [
                    { y: 0 },
                    { y: 30 },
                    { y: 20 }
				]
			}]
        },
        {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Hot Spiced Cider"
			},
			axisY: {
				title: "Orders",
			},
			axisX: {
				title: "Day",
				interval: 1
			},
			data: [{
				type: "spline",
				toolTipContent: "Day {x}: {y} orders",
				dataPoints: [
                    { y: 0 },
                    { y: 30 },
                    { y: 20 }
				]
			}]
        },
        {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Isa's Cola de Mono"
			},
			axisY: {
				title: "Orders",
			},
			axisX: {
				title: "Day",
				interval: 1
			},
			data: [{
				type: "spline",
				toolTipContent: "Day {x}: {y} orders",
				dataPoints: [
                    { y: 0 },
                    { y: 30 },
                    { y: 20 }
				]
			}]
        },
        {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Amy's Barbecue Chicken Salad"
			},
			axisY: {
				title: "Orders",
			},
			axisX: {
				title: "Day",
				interval: 1
			},
			data: [{
				type: "spline",
				toolTipContent: "Day {x}: {y} orders",
				dataPoints: [
                    { y: 0 },
                    { y: 30 },
                    { y: 20 }
				]
			}]
        }
    ]
		return (
		<div>
			 <button   onClick = {this.updateChart} className={(this.state.currId)?("btn btn-success"):("disabled")}>Update Chart</button>
		

            <Jumbotron>
                <h1 className="display-3">Choose the item data you would like to view:</h1>
                <hr className="my-2" />
            </Jumbotron>
			  <Dropdown 
		
		  	handleBtnClick = {this.handleBtnClick}
		  	options = {this.state.order}
		  />
			<CanvasJSChart 
			options = {options[this.state.currId]}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
        );
        
	}
  }

  export default Data