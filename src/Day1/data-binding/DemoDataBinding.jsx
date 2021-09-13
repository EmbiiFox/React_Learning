import React, { Component } from 'react'

export default class DemoDataBinding extends Component {
    fullName="Nairubi Cẩm Tú"
    birthYear=2000;

    renderStudent =() => {
        const student={
           fullName:'Cao con yeu cuu non',
           age:18,
           className:'BC12'
        }
        const {fullName,age,className}=student;
        return(
            <div>
                <p>
                    Name: {fullName}
                </p>
                <p>Age:{age}</p>
                <p>Class: {className}</p>
            </div>
        )
    }
    render() {
        // const fullName="Nairubi Cẩm Tú"
        // const birthYear=2000;
        return (
            <div>
                <p>This is {this.fullName}, {2021-this.birthYear} years old.</p>
                <h2>STUDENT INFORMATION</h2>
                {this.renderStudent()}
            </div>
        )
    }
}
