import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: ""
};

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      errormessage: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@") || !this.state.email.includes(".")) {
      emailError = "invalid email";
    } else {
      emailError = "correct";
    }

    if (!Number(this.state.phone)) {
      phoneError = <strong>Input a number</strong>;
    } else {
      phoneError = "correct";
    }

    if (emailError || nameError || phoneError) {
      this.setState({ emailError, nameError, phoneError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };
  render() {
    return (
      <div className="form">
        <h1>User Profile</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-item">
            <label>Name:</label>
            <input
              name="name"
              type="text"
              value={this.name}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </div>
          </div>
          <div className="form-item">
            <label>Email:</label>
            <input name="email" type="email" onChange={this.handleChange} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          </div>
          <div className="form-item">
            <label>Phone Number:</label>
            <input name="phone" type="text" onChange={this.handleChange} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.phoneError}
            </div>
          </div>
          <div className="form-item">
            <label>Password:</label>
            <input
              name="password"
              type="passoword"
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </div>
          </div>
          <div className="form-item">
            <label> </label>
            <button>Update</button>
          </div>
          <div className="form-item">
            <label> </label>
            <button>Logout</button>
          </div>
        </form>
      </div>
    );
  }
}
