import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{

  state={
    images: []
  }

   onSearchSubmit = async term =>{
    const response = await unsplash.get('search/photos/',{
      params:{
        query: term
      },     
    });
    this.setState({images: response.data.results});
  }
  
  render(){
    console.log(this.state.images);
    return(
      <div className="ui container" style={{marginTop: '10px'}}>      
       <SearchBar runSubmit={this.onSearchSubmit}/>
       <ImageList images={this.state.images}/>
     </div>

    );
  }

}

export default App;

/** 
 * <SearchBar onSubmit={this.onSearchSubmit}/>
 * I´m passing a function as a props to the Child element (SearchBar),
 * and in the SearchBar I
*/