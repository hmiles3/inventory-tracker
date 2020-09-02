import React, { Component } from "react";
import API from "../utils/API";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

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
      <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
      // <ul>
      //   <h1>Orders</h1>
      //   {results.map(result => (
      //     <li key = {result.title}>
      //       {result.title} <img src= {result.thumbnail} alt = {result.title} />
      //     </li>
      //   ))}
      // </ul>
    )
  }
}
export default Orders;