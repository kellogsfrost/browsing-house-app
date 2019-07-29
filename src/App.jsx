import React from 'react';
import Home from './Home'
import DisplayMap from './DisplayMap';
import axios from 'axios';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends React.Component {
  state = {
    cityList: '',
    schoolList: '',
  }


  
  componentDidMount() {
    axios.get('https://api.placeilive.com/v1/houses/search?q=newyork%204')
      .then(result => {
        console.log(result)
        this.setState({
          issues: result.data
        })
      })
  }

  



  render() {
    return (


      <>
        <Home />

        <Router>
        <nav>
          <Link  to='/'>HOME</Link>{' '}
          <Link  to='/city'>CityList</Link>{' '}
          <Link  to='/show'>Show</Link>{''}
          <Link to ='/map'>Map</Link>
        </nav>
        {/* <Route exact path='/' component={Home} />
        
        <Route exact path='/city' render={() => <  />} />

      
        <Route exact path='/show'/> */}

        <Route exact path='/map/' render={(props)=> <DisplayMap {...props} />} />

      </Router>


      </>

    );
  }
}


















export default App;
