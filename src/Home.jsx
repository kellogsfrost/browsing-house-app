import React, { Component } from 'react'
import {ReactComponent as Logo} from './check.svg';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

    class Home extends Component {
    render() {
        return (
            <>
            <div>
                <h3>NYC | London | San Fransisco | Berlin</h3>
            </div>
           <div>
               <h4>Queens, Brooklyn, Manhatten, Bronx and Staten Island </h4>
            </div>
            
            <div className="themes">
                <div>
                    <Logo className="transport"></Logo>
                    Transportation 
                </div>
                <div>
                    Daily Life
                </div>
                <div>
                    Safety
                </div>
                <div>
                    Health 
                </div>
                <div>
                    Sports/Leisure
                </div>
                <div>
                    Entertainment
                </div>
                <div>
                    Community
                </div>
            </div>
            <footer>
                Find my area!{''}
                <Link to={'/show/'}>  
           <input type="submit"></input>
                </Link>
           </footer>
           </>
        )
    }
}


export default Home
