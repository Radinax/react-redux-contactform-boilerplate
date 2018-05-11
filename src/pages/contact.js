import React, { Component } from "react";
import FormCode from "../FormCode";
import { Field, reduxForm } from "redux-form";

class Contact extends Component {
  render() {
    return (
      <div>
        <section className="hero is-black is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-1">CONTACT US!</h1>
              <h2 className="subtitle">Some Message</h2>
            </div>
          </div>
        </section>
        <section className="section container is-fluid">
          <div className="container is-desktop">
            <FormCode />
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
