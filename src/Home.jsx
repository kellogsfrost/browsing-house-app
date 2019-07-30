import React, { Component } from 'react'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import ReactDOM from 'react-dom'


    class Home extends Component {
        constructor(props){
            super(props);
            this.state = {
                lng: '',
                lat: '',
                showMenu: false
            }
            this.showMenu = this.showMenu.bind(this);
            this.closeMenu = this.closeMenu.bind(this);
        }
        showMenu(event) {
            event.preventDefault();
            
            this.setState({ showMenu: true }, () => {
              document.addEventListener('click', this.closeMenu);
            });
          }
          
          closeMenu(event) {
            
            if (!this.dropdownMenu.contains(event.target)) {
              
              this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
              });  
              
            }
          }
        
    render() {
        let lng = this.state.lng ? this.state.lng : 73.9442
		let lat = this.state.lat ? this.state.lat : 40.6782

		const Map = new ReactMapboxGl({
			accessToken: 'pk.eyJ1IjoibWNkdWRsZXk4NyIsImEiOiJjanhlejR5YWIwdWFwM25tcHNubDdpejIwIn0.n-RmlJrsycjQ76M82M_02Q',
			container: 'map',
			minZoom: 12,
			maxZoom: 12
		},		
	);

	return (
			<>
			  <div>
        <button className='stateButton' onClick={this.showMenu}>
        NYC |
        </button>
        <button className='stateButton'>
            London |
        </button>
        <button className='stateButton'>
            San Fransisco |
        </button>
        <button className='stateButton'>
            Berlin |
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
                <button className='cityButton'> Brooklyn </button>
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
				<div className="homeMap">
					<Map
						center={[-73.9442, 40.6782]}
						style="mapbox://styles/mapbox/streets-v9"
						containerStyle={{
							height: '600px',
							width: '500px'
						}}>
              
					</Map>
				</div>
	
           </>
        )
    }
}

export default Home
