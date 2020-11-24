import React from "react";
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import './Catalog.css';

class Catalog extends React.Component{
    render(){
        return(
            <div className="Categories">
                <div className="Designs">
                <div className="Col-2">
                    <img src={p1} alt="catlog1"/>
                </div>
                <div className="Col-2">
                    <img src={p2} alt="catlog2"/>
                </div>
                <div className="Col-2">
                    <img src={p3} alt="catlog3"/>
                </div>
                </div>
            </div>
        );
    }
}
export default Catalog;