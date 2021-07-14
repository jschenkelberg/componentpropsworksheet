import React, { Component } from 'react';

class NamesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
          }
    }
    render() { 
        return (
            <div>
                <h1>Exercise 2</h1>
                <ul>
                    <p>{this.state.names[0]}</p>
                    <p>{this.state.names[1]}</p>
                    <p>{this.state.names[2]}</p>
                    <p>{this.state.names[3]}</p>
                    <p>{this.state.names[4]}</p>
                </ul>
            </div>
          );
    }
}
 
export default NamesList;