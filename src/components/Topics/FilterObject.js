import React, { Component } from 'react';

class FilterObjects extends Component {
    constructor(){
        super();

        this.state = {
            unFilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                }
            ],
            filteredArray: [],
            userInput: ''
        }
    }

    handleChange(val){
        this.setState({ userInput:  val })
    }

    filterPeople(prop){
        var people = this.state.unFilteredArray;
        var filteredPeople = [];

        for(let i=0; i<people.length; i++){
            if (people[i].hasOwnProperty(prop)){
                filteredPeople.push(people[i]);
            }
        }
        this.setState({ filteredArray: filteredPeople});
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray,null,10) }</span>
                <input className="inputLine" onChange={ e => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterPeople(this.state.userInput) }> Filter </button>
                <span className="resultsBox filteerObjectPB">Filtered: { JSON.stringify(this.state.filteredArray,null, 10) }</span>
            </div>
        )
    }
}

export default FilterObjects;