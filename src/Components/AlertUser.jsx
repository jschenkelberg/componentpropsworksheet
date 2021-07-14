import React, { Component } from 'react';



class AlertUser extends Component {
    constructor(props) {
        super(props);       
        this.state= {
            alert: 'devCodeCamp'
        }
    }
    render() { 
        return (
            <div>
                <h1>Exercise 3</h1>
                <button onClick={() => this.props.AlertUserButton()}>Click Me</button>
            </div>    
        );
    }
}
 
export default AlertUser;