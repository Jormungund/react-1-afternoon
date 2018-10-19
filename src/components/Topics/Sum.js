import React, { Component } from 'react';

class Sum extends Component{
    render(){
        return(
            <div className="puzzleBox sumPB">
            <h4>Sum</h4>
                <input className="inputLine" type="number"></input>
                <input className="inputLine" type="number"></input>
                <button className="confirmationButton"> Add </button>
                <span className="resultsBox"></span>
            </div>
        )
    }
}

export default Sum;