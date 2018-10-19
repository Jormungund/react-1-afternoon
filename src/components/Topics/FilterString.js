import React, { Component } from 'react';

class FilterStrings extends Component{
    constructor(){
        super();

        this.state = {
            names: ['Joe','Steve','Bob','Gavin','Luke','Rachel','Ellie','Mckinzy','Jenny'],
            userInput: "",
            filteredNames: [],
        }
    }

    handleChange(val){
        this.setState({ userInput:  val })
    }

    filterNames(prop){
        var names = this.state.names;
        var filteredNames = [];

        for(let i=0; i<names.length; i++){
            if(names[i].includes(prop)){
                filteredNames.push(names[i]);
            }
        }
        this.setState({filteredNames: filteredNames});
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleTest"> Names: { JSON.stringify(this.state.names,null,10) }</span>
                <input className="inputLine" onChange={ e => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterStringPB">Filtered names:{ JSON.stringify(this.state.filteredNames,null,10) }</span>
            </div>
        )
    }
}

export default FilterStrings;