import React, { Component } from "react";
import ToyCard from "../components/ToyCard";
import { connect } from "react-redux";

class ToyContainer extends Component {
  render() {
    const renderToys = () => {
      return this.props.toys.map((toy) => <ToyCard key={toy.id} toy={toy} />);
    };

    return <div id="toy-collection">{renderToys()}</div>;
  }
}

export default connect((state) => ({ toys: state.toys }))(ToyContainer);
