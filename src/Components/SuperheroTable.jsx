import React from "react";


const SuperheroTable = (props) => {
    return (
        <React.Fragment>
               <table>     
                                       
               
            {props.superhero.map((superhero) => {
                return (
                                            
                <tbody>
                        <tr>
                        <th>ID</th>    
                        <th>Name</th>
                        <th>Primary Ability</th>
                        <th>Secondary Abililty</th>
                        </tr>
                        <tr>    
                        <td key={superhero.superheroId}></td>
                        <td>{superhero.name}</td>
                        <td>{superhero.primaryAbility}</td>
                        <td>{superhero.secondarAbility}</td>                       
                        </tr>
                        <hr />
                </tbody>
                    
                );
            })}
                  
            </table>
        </React.Fragment>
    );
}

export default SuperheroTable;