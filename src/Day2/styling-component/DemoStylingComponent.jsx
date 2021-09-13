import React, { Component } from 'react';
import './ExternalStyle.css';
import classes from './StylingWithModule.module.css';

export default class DemoStylingComponent extends Component {
    render() {
        const headingStyles={
            backgroundColor:'red',
            color:'white'
        }
        console.log(classes);
        return (
            <div>
                {/* Inline style */}
                <h1 style={headingStyles}>DEMO INLINE STYLE</h1>
                {/* External style */}
                <h1 className="heading">DEMO EXTERNAL STYLE</h1>
                {/* Styling with Module css */}
                {/* <h1 className={classes.colorBackground}>DEMO STYLING WITH MODULE</h1> */}
                <h1 className={`${classes.colorBackground} ${classes.color}`}>DEMO STYLING WITH MODULE</h1>
            </div>
        )
    }
}
