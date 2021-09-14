import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class ChildComponent extends Component {
    static propTypes={
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    }
    render() {
        const {name,age}=this.props;
        return (
            <div className="col-4" style={{paddingBottom:'30px'}}>
                <div class="card">
                    <div class="card-body">
                        {/* <h4 class="card-title">{this.props.name}</h4> */}
                        <h4 class="card-title">{name}</h4>
                        <p class="card-text">{age}Text</p>
                    </div>
                </div>   
            </div>
        )
    }
}
