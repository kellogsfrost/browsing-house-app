import React, { Component } from 'react'
import {ReactComponent as Logo} from './check.svg';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import {ReactComponent as Bus} from './bus.svg';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

    class Home extends Component {
        constructor(props){
            super(props);
            this.state = {
                lng: '',
                lat: '',
                showMenu: false
            }
            this.showMenu = this.showMenu.bind(this);
            //this.closeMenu = this.closeMenu.bind(this);
        }
        showMenu(event) {
            event.preventDefault();
            
            this.setState({ showMenu: true }, () => {
              document.addEventListener('click', this.closeMenu);
            });
          }
          
        //   closeMenu(event) {
            
        //     if (!this.dropdownMenu.contains(event.target)) {
              
        //       this.setState({ showMenu: false }, () => {
        //         document.removeEventListener('click', this.closeMenu);
        //       });  
              
        //     }
        //   }
        
    render() {
        let lng = this.state.lng ? this.state.lng : 73.9442
		let lat = this.state.lat ? this.state.lat : 40.6782

		const Map = new ReactMapboxGl({
			accessToken: 'pk.eyJ1IjoibWNkdWRsZXk4NyIsImEiOiJjanhlejR5YWIwdWFwM25tcHNubDdpejIwIn0.n-RmlJrsycjQ76M82M_02Q',
			container: 'map',
			minZoom: 10,
			maxZoom: 10
		},		
	);

	return (
        <>
            <div className='background'>
			  <div>
        <button className='stateButton' onClick={this.showMenu}>
        NYC |
        </button>
        <button className='stateButton'>
            London |
        </button>
        <button className='stateButton'>
            San Francisco |
        </button>
        <button className='stateButton'>
            Berlin 
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button className='cityButton'> Queens </button>
                <Link to={'/city/'}>
                <button className='cityButton'> Brooklyn </button>
                </Link>
                <button className='cityButton'> Manhatten </button>
                <button className='cityButton'> Bronx </button>
                <button className='cityButton'> Staten Island </button>

              </div>
            )
            : (
              null
            )
        }
      </div>
            <div className="themes">
                <div>
                    <Logo className="transport"></Logo>Transportation
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
           </div>
           </>
        )
    }
}


export default Home
