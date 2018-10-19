import React, { Component } from 'react';

class Palindrome extends Component{
    constructor(){
        super();

        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    handleChange(val){
        this.setState({ userInput: val });
    }

    palindrome(prop){
        var normal = prop;
        var reverse = prop;

        reverse = reverse.split('');
        reverse = reverse.reverse();
        reverse = reverse.join('');

        if( normal === reverse ){
            this.setState({ palindrome: 'true'});
        }else{
            this.setState({ palindrome: 'false'});
        }
    }

    render(){
        return(
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ e => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.palindrome(this.state.userInput) }>Check</button>
                <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
            </div>
        )
    }
}

export default Palindrome;