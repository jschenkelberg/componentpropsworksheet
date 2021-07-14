import React, { Component } from 'react';



class CreateSuperhero extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SuperheroId:'',
            SuperheroName:'',
            SuperheroPrimaryAbil:'',
            SuperheroSecondaryAbil:'' 
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const superhero = {
            superheroId: this.state.superheroId,
            name: this.state.superheroName,
            primaryAbility: this.state.superheroPrimaryAbil,
            secondarAbility: this.state.superheroSecondaryAbil
        }
        console.log(superhero)
        this.props.newSuperhero(superhero);
            this.setState({
                superheroId: '',
                name: '',
                primaryAbility: '',
                secondarAbility: ''
            });
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter Superhero ID</label>
                    <input name='superheroId' onChange={this.handleChange} value={this.state.superheroId}
                    onChange={this.handleChange} />
                    <label>Enter Superhero Name</label>
                    <input name='superheroName' onChange={this.handleChange} value={this.state.superheroName}
                    onChange={this.handleChange} />
                    <label>Enter Superhero Primary Ability</label>
                    <input name='superheroPrimaryAbil' onChange={this.handleChange} value={this.state.superheroPrimaryAbil}
                    onChange={this.handleChange} />
                    <label>Enter Superhero Secondary Ability</label>
                    <input name='superheroSecondaryAbil' onChange={this.handleChange} value={this.state.superheroSecondaryAbil}
                    onChange={this.handleChange} />
                    <button type='submit'>Create</button>
                </form>
            </React.Fragment>
        );
    }
}

export default CreateSuperhero;