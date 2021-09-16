import React, { Component } from 'react'
import{ connect}from 'react-redux'
class XucXac extends Component {
    render() {
        return (
            <div>
                {this.props.mangXucXac.map((xucXac,idx)=>{
                    return <img  className="mr-1" key={idx} src={xucXac.hinhAnh}  width="60px" alt="" />
                })}
            </div>
        )
    }
}
const mapStateToProps=state=>({
    mangXucXac:state.gameXucXacReducer.mangXucXac,
})
export default connect(mapStateToProps)(XucXac)
