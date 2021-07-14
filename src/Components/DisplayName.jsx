import React, { Component } from 'react';

class DisplayName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White'
          }
    }
    render() { 
        return (
            <div>
            <h1>Exercise 1</h1>     
            <p>{this.state.firstName} {this.state.lastName}</p>
            </div>
         );
    }
}
 
export default DisplayName;