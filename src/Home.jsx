import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  import ReactDOM from 'react-dom'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
  var element = "far fa-check-circle"

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
                    Transportation 
                    var element = <i class="far fa-check-circle"></i>
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
ReactDOM.render(element, document.body)

export default Home
