import React from 'react';
import Home from './Home'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends React.Component {
  state = {
    cityList: {},
    schoolList: {}
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
        </nav>
        {/* <Route exact path='/' component={Home} />
        
        <Route exact path='/city' render={() => <  />} />

      
        <Route exact path='/show'/> */}



      </Router>


      </>

    );
  }
}


















export default App;
