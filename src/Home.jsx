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
                lat: ''
            }
        }
    render() {
        let lng = this.state.lng ? this.state.lng : 73.9442
		let lat = this.state.lat ? this.state.lat : 40.6711

		const Map = new ReactMapboxGl({
			accessToken: 'pk.eyJ1IjoibWNkdWRsZXk4NyIsImEiOiJjanhlejR5YWIwdWFwM25tcHNubDdpejIwIn0.n-RmlJrsycjQ76M82M_02Q',
			container: 'map',
			minZoom: 12,
			maxZoom: 16
		},		
	);

	return (
			<>
				<div className="mapboxBox">
					<Map
						center={[-73.9442, 40.6782]}
						style="mapbox://styles/mapbox/streets-v9"
						containerStyle={{
							height: '800px',
							width: '800px'
						}}>
              
					</Map>
				</div>
			
	
	
         
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


export default Home
