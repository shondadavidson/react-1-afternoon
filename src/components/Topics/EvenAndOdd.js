import React from 'react';
import {Component} from 'react';

class EvenAndOdd extends Component {
    constructor (){
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(e){
        // console.log(val)
        this.setState({userInput: e.target.value});
    }

    assignEvenAndOdds(userInput){
        const arr = userInput.split(',')
        console.log(arr)
        var evens = []
        var odds = []
        for(let i = 0; i<arr.length; i++){
            if (arr[i] % 2 === 0){
                evens.push(parseInt(arr[i]))
            }
            else {
                odds.push(parseInt(arr[i]))
            }
        }
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
        console.log(evens, odds)
    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
            <h4> Evens and Odds</h4>
            <input className="inputLine" onChange={(e) => this.handleChange(e)}></input>
            <button className="confirmationButton" onClick={ 
                () => {this.assignEvenAndOdds(this.state.userInput)}} 
            >split </button>
            <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) }</span> 
            <span className="resultBox">Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}
export default EvenAndOdd;
