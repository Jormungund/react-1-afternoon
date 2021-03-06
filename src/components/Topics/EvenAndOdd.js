import React, { Component } from 'react';

class EvenAndOdds extends Component {
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    handleChange(val){
        this.setState({ userInput: val });
    }
    assignEvensAndOdds(userInput){
        var arr = userInput.split(',');
        var evens = [];
        var odds = [];

        for(let i=0;i<arr.length;i++){
            if(arr[i]%2 === 0){
                evens.push(parseInt(arr[i]));
            }else if(arr[i]%2 !== 0){
                odds.push(parseInt(arr[i]));
            }
        }
        this.setState({ evenArray: evens, oddArray: odds })
    }
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" onChange={ e=>this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ ()=> { this.assignEvensAndOdds(this.state.userInput) } } > Split </button>
                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}

export default EvenAndOdds