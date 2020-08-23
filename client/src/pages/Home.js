import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://s.hdnux.com/photos/01/07/72/06/18850183/5/920x920.jpg">
        <h1>Inventory Tracker</h1>
        <h2>View your restaurant's inventory data!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Inventory Tracker!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              A simple way of keeping tabs on how efficiently your food is being served, and which items are ordered the most often. By calculating the weight of your items, and the amount that goes into one serving, this app can represent the amount of orders you would serve at maximum efficiency. Just report your orders and when a container is emptied, and you will see how many orders were actually served. Using the data visualization, you will be able to view various statistics about how your inventory is currently being managed in order to best help you run your business!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
