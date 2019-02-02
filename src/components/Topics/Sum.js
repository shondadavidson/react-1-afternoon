import React, {Component} from 'react';

class Sum extends Component {
    constructor (){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
        
    }
        updateNumber1(e) {
            this.setState({ number1: parseInt (e, 10 )});
        }

        updateNumber2(e) {
            this.setState({ number2: parseInt(e, 10) })
        }

        add(num1, num2){
            this.state( { sum: num1 + num2 });
                
        }
    render(){
        return(
            <div className="puzzleBox sumPB">
            <h4>Sum </h4>
            <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
            <input className="inputLine" TYPE="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.numner2) }> Add </button>
            <span className="resultsBox"> Sum: {this.state.sum}</span>


            </div>
        )
    }
}

export default Sum;