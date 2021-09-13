import React,{Component} from "react";
import Header from "../Exercise2/Header";
import Content from "./Content";
import Footer from "./Footer";
import Navigation from "./Navigation";

class Exercise2 extends Component{
    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Header/>
                        </div>
                        <div className="col-4">
                            <Navigation/>
                        </div>
                        <div className="col-8">
                            <Content/>
                        </div>
                        <div className="col-12">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Exercise2;