import React, { Component } from 'react';
import axios from "axios";

class Jokes extends Component {
    constructor(props) {
        super(props);       
        this.state= {
            jokes: []
            }
    }

    componentDidMount(){
        axios.get("https://official-joke-api.appspot.com/jokes/ten")
                .then(res => {
                    console.log(res)
                    const jokes = res.data
                    this.setState({ jokes });
                })   
    }
    render() { 
        return (
                <React.Fragment>
                    <br></br>
                    {this.state.jokes.map(joke => 
                    <h1>{joke.setup} <br /><br />... {joke.punchline}</h1>)}
                    <hr></hr>                    
                    <br></br>                                                 
                </React.Fragment>
            )
       }
  
}

export default Jokes;


   
