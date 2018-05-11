import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Components
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import Homepage from "./pages/homepage";
import Products from "./pages/products";
import Contact from "./pages/contact";
// import FormCode from './FormCode';

//Includes
import "./Assets/css/default.min.css";

class App extends Component {
  state = {
    fields: {}
  };
  submit = values => {
    alert("submitted");
    console.log(values);
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/products" component={Products} />
          <Route
            exact
            path="/contact"
            render={props => <Contact {...props} onSubmit={this.submit} />}
          />
          <Footer name="Adrian Beria" />
        </div>
      </Router>
    );
  }
}

export default App;
