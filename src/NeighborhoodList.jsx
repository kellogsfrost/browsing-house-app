import React from 'react';
import { Link } from 'react-router-dom'

const NeighborhoodList = props => (
    <>


        {props.lists.map((list, i) => {
            return (
                <div className="Tripflex">
                    <div key={i} className="mytrips">
                        <Link to={`/show/`}> {' '}
                            <h4 className="Tripname">{list}</h4>
                        </Link>

                    </div>
                </div>

            )
        }
        )
        }





        {/* 
<button>Go!</button><div className="park">ParkSlope</div>
<button>Go!</button><div className="bed">Bed Stuy</div>
<button>Go!</button><div className="green">Green Point</div> */}
    </>
)


export default NeighborhoodList;
