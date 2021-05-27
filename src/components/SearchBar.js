import React from 'react';


class SearchBar extends React.Component{
  

  state={term: '' };
  
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.runSubmit(this.state.term);
  }

  onInputChange(event){
    //event.target.value;
  }

render(){
  return(
    <div className="ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
        <label>Image Search</label>
          <input 
          value={this.state.term}
          onChange={(e) => this.setState({term: e.target.value})} 
          type="text"/> 
        </div> 
        <p>{this.state.term.length < 10 ? "Must have 10 chars" : 'Ready to go..'}</p>       
        <p>Char: {this.state.term.length}</p>       
      </form>
    </div>
  );
};


}


export default SearchBar;