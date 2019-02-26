import React, { Component } from "react";
import SearchForm from "./childComponents/SearchForm";
import API from "../utils/API";

class Container extends Component {
  state = {
    theKey: "",
    theValue: ""
  };

  componentDidMount() {
    console.log("it's off to the races")
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name + ": " + value);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let name = event.target.name;
    let searchTerm = this.state;

    switch(name) {
      case "Get":
        API.get(searchTerm.theKey)
        .then(response => {
          console.log("response; ", response);
        })
        break;
      case "Post":
        API.post(searchTerm)
        .then(response => {
          console.log("response: ", response);
        })
        break;
      case "Put":
        API.put(searchTerm)
        .then(response => {
          console.log("response: ", response);
        })
        break;
      case "Delete":
        API.delete(searchTerm.theKey)
        .then(response => {
          console.log("response: ", response);
        })
        break;
      default:
        console.log("ain't nuttin");
    }
  };

  beGoofy = event => {
    event.preventDefault();
    console.log("you got me!")
  }

  render() {
    return (
      <div className="container">
        <SearchForm
          theKey={this.state.key}
          theValue={this.state.value}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          goofy={this.beGoofy}
        />
      </div>
    );
  }
}

export default Container;
