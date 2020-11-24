import React from "react";
import './Offer.css';
import smart from './Smart.jpg';

class Offer extends React.Component{
    render(){
        return(
          <div className="Offers">
             
                  
                      <div className="col-5">
                         <img src={smart} alt="Smart" className="Offerimg"/>
                      </div>
                      <div className="col-5">
                          <p>Exclusively available on Online Shop</p>
                          <h1>Smart Band 4</h1>
                          <small>Connected bracelets or smart bracelets are called smart bands. In most cases, they have a simple form and their main function is to track and analyze your movements during the day. That's why, most smart bands have a pedometer, and sometimes also an optical heart rate sensor and various other sensors.</small>
                          <div>
                          <button>Buy Now&#8594;</button>
                          </div>
                      </div>
                
             

          </div>  
        );
    }
}
export default Offer;