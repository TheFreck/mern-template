import React from "react";
import Button from "../buttons/Button";

const SearchForm = props => {
  return (
    <form onSubmit={props.goofy}>
      <label htmlFor="theKey">Key:</label>
      <input
        onChange={props.handleInputChange}
        value={props.theKey}
        name="theKey"
        type="text"
        className="form-control"
        placeholder="enter the key here"
        id="theKey"
      />
      <label htmlFor="theValue">Value:</label>
      <input
        onChange={props.handleInputChange}
        value={props.theValue}
        name="theValue"
        type="text"
        className="form-control"
        placeholder="enter the value here"
        id="theValue"
      />
      <Button
        click={props.handleFormSubmit}
        id="Get"
      />
      <Button
        click={props.handleFormSubmit}
        id="Post"
      />
      <Button
        click={props.handleFormSubmit}
        id="Put"
      />
      <Button
        click={props.handleFormSubmit}
        id="Delete"
      />
      <input type="submit"/>
    </form>
  );

}

export default SearchForm;
