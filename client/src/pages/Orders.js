import React, { Component } from "react";
import API from "../utils/API";
import Wrapper from "../components/Wrapper"
import Title from "../components/Title"
import ItemCard from "../components/ItemCard"

class Orders extends Component {
  state = {
    menuItems: []
  }

  componentDidMount(){
    API.getDataBase()
    .then(dbresponse => this.setState({menuItems: dbresponse.data}))
    .catch(error => console.error(error))
  }
  handleBtnClick = event => {
    event.preventDefault();
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    const id = event.target.dataset.id;
    if (btnType === "order") {
      // API.getDataPoint()
      console.log("Ordered!", id)
    } else if (btnType === "stock"){
      console.log(this.state.menuItems)
      // API.getDataBase()
      // .then(dbresponse => console.log(dbresponse.data))
      // .catch(error => console.error(error))
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

        {this.state.menuItems.map(item => {
                  return (
                    <ItemCard
                    id={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    ingredients={item.ingredients}
                    handleBtnClick={this.handleBtnClick}
                  />
                  );
                })}
        {/*  */}
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