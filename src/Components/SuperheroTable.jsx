import React from "react";

const SuperheroTable = (props) => {
    return (
        <ul>
               <table>     
                                       
               <tbody> 
            {props.superhero.map((superhero) => {
                return (
                    <div>                        
                
                        <tr>
                        <th>Name</th>
                        <th>Primary Ability</th>
                        <th>Secondary Abililty</th>
                        </tr>    
                    <tr key={superhero.superheroId}>
                        <td>{superhero.name}</td>
                        <td>{superhero.primaryAbility}</td>
                        <td>{superhero.secondarAbility}</td>
                        <hr />
                    </tr>
              
                    </div>
                );
            })}
                  </tbody>
            </table>
        </ul>
    );
}

export default SuperheroTable;