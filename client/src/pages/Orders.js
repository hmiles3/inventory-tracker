import React, { Component } from "react";
import API from "../utils/API";

class Orders extends Component {
  state = {
    results: []
  }
  componentDidMount(){
    API.getMenu()
      .then(res => this.setState({results: res.data.results}))
      .catch(err => console.log(err));
  }
  render() {
    const { results } = this.state;
    return (
      <ul>
        <h1>Orders</h1>
        {results.map(result => (
          <li key = {result.title}>
            {result.title} <img src= {result.thumbnail}/>
          </li>
        ))}
      </ul>
    )
  }
}
export default Orders;