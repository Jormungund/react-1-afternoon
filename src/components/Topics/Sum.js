import React, { Component } from 'react';

class Sum extends Component{
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    
    handleChange1(val){
        this.setState({number1: parseInt(val)});
    }
    handleChange2(val){
        this.setState({number2:parseInt(val)});
    }

    sum(num1,num2){
        var sum = num1+num2;
        this.setState({sum:sum});
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
            <h4>Sum</h4>
                <input className="inputLine" type="number" onChange={ e => this.handleChange1(e.target.value)}></input>
                <input className="inputLine" type="number"onChange={e => this.handleChange2(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.sum(this.state.number1, this.state.number2)}> Add </button>
                <span className="resultsBox"> Result: { this.state.sum }</span>
            </div>
        )
    }
}

export default Sum;