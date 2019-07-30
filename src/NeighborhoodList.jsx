import React from 'react';
import { Link } from 'react-router-dom'

const NeighborhoodList = props => (
    <>


        <div className="Tripflex">
            <div className="mytrips">
                <ul>
                    <li>Transportation</li>
                    <br />
                    <li>Daily Life</li>
                    <br />
                    <li>Community</li>
                </ul>

                <h4 className="Tripname"> {props.lists[1]}</h4>

            </div>

            <div className="mytrips">

                <ul>
                    <li>Transportation</li>
                    <br />
                    <li>Daily Life</li>
                    <br />
                    <li>Community</li>
                </ul>
                <Link to={`/show/`}> {' '}
                    <h4 className="Tripname"> {props.lists[0]}</h4>
                </Link>
            </div>


            <div className="mytrips">

                <ul>
                    <li>Transportation</li>
                    <br />
                    <li>Daily Life</li>
                    <br />
                    <li>Community</li>
                </ul>
                <h4 className="Tripname"> {props.lists[2]}</h4>

            </div>



            {/* 
            <ul>
                    <li>Transportation</li>
                        <br/>
                    <li>Daily Life</li>
                        <br/>
                    <li>Community</li>
                </ul> */}





        </div>









    </>

)

/*<button>Go!</button><div className="park">ParkSlope</div>
<button>Go!</button><div className="bed">Bed Stuy</div>
<button>Go!</button><div className="green">Green Point</div>*/



export default NeighborhoodList;
