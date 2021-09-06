import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./containers/ToyContainer";
import { fetchToys } from "./actions/toys";

class App extends React.Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.props.fetchToys();
  }

  closeForm = () => {
    this.setState({ display: false });
  };

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  render() {
    return (
      <>
        <Header />
        {this.state.display ? <ToyForm closeForm={this.closeForm} /> : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer />
      </>
    );
  }
}

export default connect(null, { fetchToys })(App);
