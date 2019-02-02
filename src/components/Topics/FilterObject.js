import React, { Component } from 'react';

class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            employees: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Scrader',
                    age: 24,
                    hairColor: 'brown',
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                }
            ],
            
            userInput: '',
            filteredEmployees: []
        };
    }

    handleChange(val) {
            this.setState({ userInput: val });
    }
    
    runFilter(prop){
        let employees = this.state.employees;
        let runFilter = [];
/// tried using employees[i] === prop but it didnt work
        for(let i = 0; i < employees.length; i++){
            if(employees[i].hasOwnProperty(prop) ){
                // if(employees[i] === prop){
                runFilter.push(employees[i])
                // console.log(prop)
            }
        }
        this.setState({ runFilter: runFilter } )
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.runFilter(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.runFilter, null, 10)} </span>
            </div>
        )
    }
}

export default FilterObject;