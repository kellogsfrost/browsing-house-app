import React, { Component } from 'react'
import {ReactComponent as Logo} from './check.svg';
import {ReactComponent as Circle} from './circle.svg';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
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
			maxZoom: 18
		},		
	);

	return (
        <>
            <div className='background'>
			  <div>
                  <nav>
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
        </nav>
        	<Map className="homeMap"
						center={[-73.9442, 40.6782]}
						style="mapbox://styles/mapbox/streets-v9"
						containerStyle={{
							height: '1200px',
							width: '800px'
						}}>
					</Map>
      </div>
            <div className="themes">
                <div>
                    <Logo className="transport"></Logo>Transportation
                </div>
                <div>
                    <Logo className="transport"></Logo>Daily Life
                </div>
                <div>
                    <Circle className="circle"></Circle>Safety
                </div>
                <div>
                    <Circle className="circle"></Circle>Health 
                </div>
                <div>
                    <Circle className="circle"></Circle>Sports/Leisure
                </div>
                <div>
                    <Circle className="circle"></Circle>Entertainment
                </div>
                <div>
                <Logo className="transport"></Logo>Community

                </div>
            
            <footer>
                Find my area!{''}
                <Link to={'/show/'}>  
           <input type="submit"></input>
                </Link>
           </footer>
           </div>
           </div>
           </>
        )
    }
}


export default Home
