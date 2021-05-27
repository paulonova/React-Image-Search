import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
//import axios from 'axios';

class App extends React.Component{

  state={
    images: []
  }

  // USING AXIOS 
  // async onSearchSubmition2(term){
  //   const response = await axios.get('https://api.unsplash.com/search/photos', {
  //     params:{query: term},
  //     headers:{
  //       Authorization: 'Client-ID 5c2044aad9878d3c9de119300662a56bbf6fdd32ec1bd9e49828209f190fedf2'
  //     }
  //   });
  //   this.setState({images: response.data.results});
  // }

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
       <p>Found: {this.state.images.length}</p>
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