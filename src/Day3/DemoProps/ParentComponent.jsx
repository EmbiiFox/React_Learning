import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  render() {
    return (
      <div className="container">
        <p>Parent Component </p>
        <div className="row">
          <ChildComponent name="Tu" age={18} />
          <ChildComponent name="Huy" age={18}/>
          <ChildComponent name="Tu" age="19" />
          <ChildComponent name="Huy" age="19"/>
          <ChildComponent name="Tu" age="20" />
          <ChildComponent name="Huy" age="20"/>

        </div>
      </div>
    );
  }
}
