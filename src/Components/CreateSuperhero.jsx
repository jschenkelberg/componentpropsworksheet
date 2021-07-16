import React, { Component } from 'react';



class CreateSuperhero extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newSuperheroId:'',
            newName:'',
            newPrimaryAbility:'',
            newSecondarAbility:'' 
        }
    }

    handleChange = (event) => {        
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.value)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const superhero = {
            superheroId: this.state.SuperheroId,
            name: this.state.name,
            primaryAbility: this.state.primaryAbility,
            secondarAbility: this.state.secondarAbility
                }
        console.log(superhero)
        this.props.addNewSuperhero(superhero);
            this.setState({
                newSuperheroId: this.state.newSuperheroId,
                newName: this.state.newName,
                newPrimaryAbility: this.state.newPrimaryAbility,
                newSecondarAbility: this.state.newSecondarAbility
            });
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>                  
                    <label>Enter Superhero Name</label>
                    <input name='name' onChange={this.handleChange} value={this.state.name}/>
                    <label>Enter Superhero Primary Ability</label>
                    <input name='primaryAbility' onChange={this.handleChange} value={this.state.primaryAbility}/>
                    <label>Enter Superhero Secondary Ability</label>
                    <input name='secondarAbility' onChange={this.handleChange} value={this.state.secondarAbility}/>
                    <button type='submit'>Create</button>
                </form>
            </React.Fragment>
        );
    }
}

export default CreateSuperhero;