
import React, { Component } from 'react'

export default class DemoState extends Component {
//  Thuộc tính state 
    state={
        loggedIn:false,
    }

    // loggedIn=false;
    login=()=>{
        // this.loggedIn=true;
        //Không thể cập nhập trực tiếp như thế này
        // this.state.loggedIn=true;
        this.setState({
            loggedIn:true,
        })
        //Vì state trên devtools vẫn là false 
        // console.log(this.state.loggedIn);
    }
    render() {
        console.log('render');
        console.log(this.state.loggedIn);
        return (
            <div className="text-center">
                {this.state.loggedIn?(
                    <h1>Welcome to this page</h1>
                ):<button className='btn btn-success' onClick={this.login}>LOGIN</button>}   
            </div>
        )
    }
}
