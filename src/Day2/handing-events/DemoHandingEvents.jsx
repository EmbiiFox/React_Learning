import React, { Component } from 'react'

export default class DemoHandlingEvents extends Component {
    //Hàm không tham số
    greeting=()=>{
        alert("WELCOME TO OUR HOME");
    }
    // Hàm có tham số
    subcribe = name=>{
        alert(`Thank ${name} for subcribing`)
    }
    render() {
        return (
            <div>
                <button onClick={this.greeting} className="btn btn-info">Click me</button>
                <button onClick={()=> this.subcribe('Tu')} className="btn btn-danger">Subcribe</button>
            </div>
        )
    }
}
