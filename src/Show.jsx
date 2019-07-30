import React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import MapMarker from './Marker';
import {ReactComponent as Bus} from './bus.svg';
import {ReactComponent as Ninja} from './ninja.svg';
import {ReactComponent as Volley} from './volleyball.svg';
import {ReactComponent as User} from './users.svg';
import {ReactComponent as Coffee} from './coffee.svg';
import axios from 'axios';


class Show extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			lng: '',
			lat: ''
		}
	}

	// componentDidMount() {
	// 	//get a location from props
	// 	// axios post request to /geo/code
	// 	axios.post('/geo/code',{
	// 		location: this.props.match.params.location
	// 	}).then( result => {
	// 		this.setState({
	// 			lng: result.data[0],
	// 			lat: result.data[1]
	// 		})
	// 	})
	// }

	render () {
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
            <div  className="parkSlope"></div>
            <div>
                <Bus className='badge'></Bus>
                <Ninja className='badge'></Ninja>
                <Volley className='badge'></Volley>
                <User className='badge'></User>
                <Coffee className='badge'></Coffee>
            </div>
				<div className="showMap">
					<Map
						center={[-73.9442, 40.6782]}
						style="mapbox://styles/mapbox/streets-v9"
						containerStyle={{
							height: '400px',
							width: '100%'
						}}>
              {/* Make this render interview location */}
						<Marker coordinates={[lng, lat]}
							style={{backgroundColor: 'green', height: '25px', width: '25px', borderRadius: '50%'}}>
						</Marker>
						<MapMarker	/>
					</Map>
				</div>
                </>
		)
	}
}	

export default Show;
