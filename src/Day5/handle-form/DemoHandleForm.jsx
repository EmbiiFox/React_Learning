import React, { Component } from "react";

export default class DemoHandleForms extends Component {
  state = {
    email: "",
    password: "",
  };
  handleOnChange = (event) => {
    //   chấm target vì coi trong devtool 
    //   console.log(event.target.name,event.target.value);
      const {name,value}=event.target;
      this.setState({
          [name]:value
      },()=>{
          console.log(this.state);
      })
  };
    handleSubmit=event=>{

        event.preventDefault();
        console.log('submitted');
        console.log(this.state);
    }
  render() {
    return (
      <div div className="container">
        <h1>LOGIN</h1>
        <form onSubmit={this.handleSubmit}> 
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              className="form-control"
              //   đặt tên name giống tên biến email ơ state
              name="email"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.handleOnChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
