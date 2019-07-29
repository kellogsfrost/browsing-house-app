import React, { Component } from 'react'

export class Home extends Component {
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
                    <i class="far fa-check-circle"></i> 
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

            <footer></footer>
           </>
        )
    }
}

export default Home
