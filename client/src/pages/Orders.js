import React, { Component } from "react";
// import API from "../utils/API";
// import React from "react";
import Wrapper from "../components/Wrapper"
import Title from "../components/Title"
import ItemCard from "../components/ItemCard"
import items from "../items.json"

class Orders extends Component {
  handleBtnClick = event => {
    event.preventDefault();
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    if (btnType === "order") {
      console.log("Ordered!")
    } else if (btnType === "stock"){
      console.log("New Shift!")
    }
  }

  render(){
    return (
      <Wrapper>
        <button
        data-value="stock"
        onClick={this.handleBtnClick}
        >
          New Shift
        </button>
        {/* I press this button, and Y goes back to zero, moving up the X-axis */}
        <Title>Menu</Title>
        <ItemCard
          title={items[0].title}
          thumbnail={items[0].thumbnail}
          ingredients={items[0].ingredients}
          handleBtnClick={this.handleBtnClick}
        />
        <ItemCard
          title={items[1].title}
          thumbnail={items[1].thumbnail}
          ingredients={items[1].ingredients}
          handleBtnClick={this.handleBtnClick}
        />
        <ItemCard
          title={items[2].title}
          thumbnail={items[2].thumbnail}
          ingredients={items[2].ingredients}
          handleBtnClick={this.handleBtnClick}
        />
        <ItemCard
          title={items[3].title}
          thumbnail={items[3].thumbnail}
          ingredients={items[3].ingredients}
          handleBtnClick={this.handleBtnClick}
        />
        <ItemCard
          title={items[4].title}
          thumbnail={items[4].thumbnail}
          ingredients={items[4].ingredients}
          handleBtnClick={this.handleBtnClick}
        />
        <ItemCard
          title={items[5].title}
          thumbnail={items[5].thumbnail}
          ingredients={items[5].ingredients}
          handleBtnClick={this.handleBtnClick}
        />
        <ItemCard
          title={items[6].title}
          thumbnail={items[6].thumbnail}
          ingredients={items[6].ingredients}
          handleBtnClick={this.handleBtnClick}
        />
        <ItemCard
          title={items[7].title}
          thumbnail={items[7].thumbnail}
          ingredients={items[7].ingredients}
          handleBtnClick={this.handleBtnClick}
        />
        {/* <ItemCard
          title={items[8].title}
          thumbnail={items[8].thumbnail}
          ingredients={items[8].ingredients}
          handleBtnClick={this.handleBtnClick}
        /> */}
        <ItemCard
          title={items[9].title}
          thumbnail={items[9].thumbnail}
          ingredients={items[9].ingredients}
          handleBtnClick={this.handleBtnClick}
        />
      </Wrapper>
    );
  }

}

export default Orders;

// class Orders extends Component {
//   state = {
//     results: []
//   }
//   componentDidMount(){
//     API.getMenu()
//       .then(res => this.setState({results: res.data.results}))
//       .catch(err => console.log(err));
//   }
//   render() {
//     const { results } = this.state;
//     return (
//       <div>
//       <Card>
//         <CardImg top width="100%" src="../../public/logo192.png" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Card title</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </div>
//       // <ul>
//       //   <h1>Orders</h1>
//       //   {results.map(result => (
//       //     <li key = {result.title}>
//       //       {result.title} <img src= {result.thumbnail} alt = {result.title} />
//       //     </li>
//       //   ))}
//       // </ul>
//     )
//   }
// }
// export default Orders;