import React from 'react';
import { Link } from 'react-router-dom'

const NeighborhoodList = props => (
    <>


        {props.props.neighborhoodList.map()}
        <div className="Tripflex">
            <div className="mytrips">
                <Link to={`/show/`}> {' '}
                    <h4 className="Tripname">{props.neighborhoodList[0]}</h4>
                </Link>
                <button >Click</button>
            </div>
        </div>


        {/* 
<button>Go!</button><div className="park">ParkSlope</div>
<button>Go!</button><div className="bed">Bed Stuy</div>
<button>Go!</button><div className="green">Green Point</div> */}
    </>
)


export default NeighborhoodList;
