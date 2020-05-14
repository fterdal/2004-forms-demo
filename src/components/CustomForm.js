import React from "react";

class CustomForm extends React.Component {
  constructor() {
    super();
    this.state = {
      sandwichName: "",
      sandwichLastName: "",
      vegetarian: false,
      quantity: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting:");
    console.log(this.state);
  }

  handleChange(event) {
    // if (event.target.name === "sandwichName") {
    //   this.setState({
    //     sandwichName: event.target.value,
    //   });
    // } else if (event.target.name === "sandwichLastName") {
    //   this.setState({
    //     sandwichLastName: event.target.value,
    //   });
    // } else if (event.target.name === "vegetarian") {
    //   this.setState({
    //     vegetarian: !this.state.vegetarian,
    //   });
    // }
    // else {
    //   if (event.target.value >= 0) {
    //     this.setState({
    //       quantity: event.target.value,
    //     });
    //   }
    // }
    if (event.target.name === "vegetarian") {
      this.setState({
        vegetarian: !this.state.vegetarian,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }
  handleClear() {
    this.setState({
      sandwichName: "",
      vegetarian: false,
      quantity: 0,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.sandwichName + " " + this.state.sandwichLastName}</h1>
        <input
          name="sandwichName"
          type="text"
          placeholder="Sandwich Name"
          onChange={this.handleChange}
          value={this.state.sandwichName}
        />
        <input
          name="sandwichLastName"
          type="text"
          placeholder="Sandwich Last Name"
          onChange={this.handleChange}
          value={this.state.sandwichLastName}
        />
        <input
          name="vegetarian"
          type="checkbox"
          onChange={this.handleChange}
          value={this.state.vegetarian}
        />
        <input
          name="quantity"
          type="number"
          placeholder="How Many?"
          min={0}
          onChange={this.handleChange}
          value={this.state.quantity}
        />
        <button onClick={this.handleClear}>Reset Form</button>
        <button disabled={!this.state.sandwichName} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default CustomForm;
