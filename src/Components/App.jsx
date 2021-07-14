import React, { Component } from 'react';
import DisplayName from './DisplayName';
import NamesList from './NamesList';
import AlertUser from './AlertUser';
import SuperheroTable from './SuperheroTable';
import CreateSuperhero from './CreateSuperhero';
import Jokes from './Jokes';

class App extends Component {
   constructor(props) {
       super(props);
   this.state = {
       superheroes:[
               {
                   superheroId: 1,
                   name: 'Batman',
                   primaryAbility: 'Wealthy',
                   secondarAbility: 'Rich'
               },
               {
                   superheroId: 2,
                   name: 'Superman',
                   primaryAbility: 'Super strength',
                   secondarAbility: 'Fly'
               },
               {
                   superheroId: 3,
                   name: 'Spiderman',
                   primaryAbility: 'Spider senses',
                   secondarAbility: 'Shoots web'
               }
           ],
         rerender: true    
       }
   }

AlertUserButton(){
   return alert('devCodeCamp') 
   }

addNewSuperhero(superhero){
   console.log(superhero)
  this.state.superheroes.push(superhero);
  console.log(this.state.superheroes)
   this.setState({
      rerender: !this.state.rerender
   })
}

render() {
    return (
       <div>
          <DisplayName />
          <NamesList />
          <AlertUser AlertUserButton={this.AlertUserButton}/>
          <h1>Exerise 4</h1>
          <SuperheroTable superhero={this.state.superheroes}/> 
          <h1>Part 2, Exercise 1</h1>
          <CreateSuperhero newSuperhero={this.addNewSuperhero.bind(this)}/>
          <h1>Part2, Exercise 2</h1>
          <Jokes />      
       </div>
    );
 }
}

export default App;
