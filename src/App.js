import React, { Component } from 'react';
import './App.css';
import { Cardlist } from './Components/Cardlist/Cardlist';
import {SearchBox} from './Components/Searchbar/searchbar'

class App extends Component {
  constructor() {
      super();
      this.state = {
          kittens: [ /* if you are requesting an API your array should be empty */
          ], /* state becomes props later down the data line */ 
          searchfield: []
      }
  }
  /* Mounting means the application puts our data on the page the first time */
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users') /* returns a promise */ 
      .then(Response => Response.json()) /* change it to json */
      .then(users => this.setState({kittens: users})) /* change the json into the array */ 
  }
  /* this is where you put props into components */ 
  render() { 
      /* destructoring  pull props off of objects and use them*/ 
      
      const {kittens, searchfield} = this.state;
      const filteredKittens = kittens.filter(kitten => 
        kitten.name.toLowerCase().includes(searchfield) 
          ); 
          

      return ( 
          <div className="App container-fluid">
              <h1 className="title">CatShop</h1>
              <p className="subheading">Matching cat breeders with cat wanters since 1640</p>
              <SearchBox 
              /* here is where you put props to pass in */ 
              placeholder='Search by Owner'
              handleChange={e => this.setState ({searchfield: e.target.value})}
              
              />

        <Cardlist kittens={filteredKittens} />
        <footer>&copy; 2020 CatShop Inc.</footer>
      </div> /* somehow the props are passed to the cardlist component from the main app */
      );
  }
}

export default App;
