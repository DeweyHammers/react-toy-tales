import React, { Component } from "react";
import { connect } from "react-redux";
import { addToy } from "../actions/toys";

class ToyForm extends Component {
  state = {
    name: "",
    image: "",
    likes: 0,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addToy(this.state);
    this.setState({ name: "", image: "" });
    this.props.closeForm();
  };

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter a toy's name..."
            className="input-text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Enter a toy's image URL..."
            className="input-text"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Create New Toy"
            className="submit"
          />
        </form>
      </div>
    );
  }
}

export default connect(null, { addToy })(ToyForm);
