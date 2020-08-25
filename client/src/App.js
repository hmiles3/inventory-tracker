import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Data from "./pages/Data";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/data" component={Data} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/inventory" component={Inventory} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
