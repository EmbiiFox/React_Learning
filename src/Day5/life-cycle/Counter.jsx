import React, { Component, PureComponent } from 'react'

export default class Counter extends Component {

    //Chạy đầu tiên và chỉ chạy 1 lần
    constructor(props){
        super(props);
        console.log('Counter> Constructor');
        this.state={
            counter:0,
        }
    }
    // increase=()=>{
    //     this.setState({couter:(this.state.counter+=1)});
    // }
    increase=()=>{
        this.setState((state)=>({
            counter:state.counter+=1,
        }))
    }
    decrease=()=>{
        this.setState({couter:(this.state.counter-=1)});
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     if(nextProps.randomNumber!==this.props.randomNumber || nextState.counter !==this.state.counter){
    //         return true;
    //     }
    //     return false;
    // }
    render() {
        console.log('Counter>render');
        return (
            <div className="text-center">
                <div className="display-4">Counter: {this.state.counter}</div>
                <div>Random number props:{this.props.randomNumber}</div>
                <button onClick={this.increase}>Increase</button>
                {' '}
                <button onClick={this.decrease}>Decrease</button>
            </div>
        )
    }
    componentDidMount(){
        
        // this.interval=setInterval(()=>{
        //     console.log('interval');
        // },1000)
        console.log("Counter>componentDidMount");
    }
    componentDidUpdate(prevProps,prevState){
        console.log("Counter>componentDidUpdate");
    }
    componentWillUnmount(){

        // clearInterval(this.interval);
        console.log('Counter>unmouth');
    }
}
