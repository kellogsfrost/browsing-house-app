import React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import MapMarker from './Marker';
import {ReactComponent as Bus} from './bus.svg';
import {ReactComponent as Ninja} from './ninja.svg';
import {ReactComponent as Volley} from './volleyball.svg';
import {ReactComponent as User} from './users.svg';
import {ReactComponent as Coffee} from './coffee.svg';
import {ReactComponent as Music} from './music.svg';
import {ReactComponent as Amb} from './amb.svg';
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
			minZoom: 14,
			maxZoom: 20
		},		
	);

	return (
			<>
            <h1>Welcome to Park Slope</h1>
            <div  className="parkSlope"></div>
            <div><p>Busses: 95 + 98 | Metro 4, 5 and 6| Walkability 95</p></div>
            <div><p>1 Bedroom Range: $1,900 - $5,000 </p></div>
            <div className="icons">
                <Bus className='badge'></Bus><p>91</p>
                <Ninja className='badge'></Ninja><p>75</p>
                <Volley className='badge'></Volley><p>99</p>
                <User className='badge'></User><p>80</p>
                <Coffee className='badge'></Coffee><p>95</p>
                <Music className='badge'></Music><p>96</p>
                <Amb className='badge'></Amb><p>70</p>
            </div>
            <p className="description">Down-to-earth Park Slope is a residential area of tree-lined streets and historic brownstones in Brooklyn. It's known for its open-minded community of families and young professionals. The mix of indie boutiques, laid-back bars and casual restaurants along 5th Avenue and pockets of 7th Avenue caters to the diverse area. Locals and visitors head to sprawling Prospect Park for outdoor concerts, picnics and jogging.</p>
				<div className="showMap">
					<Map
						center={[-73.9814, 40.6711]}
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
