import React from 'react';
import main from './main.jpg';
import './Home.css';

class Home extends React.Component{
    render(){
        return(
            <div className="Row">
                
                <div className="Col-1">
                    <h1>Give your workout <br/> A new style!</h1>
                    <p>Success isn't always about greatness.It's about consistency.consistency hardwork gains success.<br/>Greatness will come.</p>
                    <button>Explore Now&#8594;</button>
                </div>
                <div className="Col-1">
                <img src={main} alt="main" width="445px"/> 

                </div>

            </div>
        );
    }
}
export default Home;