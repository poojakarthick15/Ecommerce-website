import React from "react";
import './Brand.css';
import brand1 from './brand1.png';
import brand2 from './brand2.png';
import brand3 from './brand3.png';
import brand4 from './brand4.png';
import brand5 from './brand5.jpg';


class Brand extends React.Component{
    render(){
        return(
          <div className="brands">
              <div class="col-3">
                  <img src={brand1} width="150px"/>
              </div>
              <div class="col-3">
                  <img src={brand2} width="150px"/>
              </div>
              <div class="col-3">
                  <img src={brand3} width="150px"/>
              </div>
              <div class="col-3">
                  <img src={brand4} width="150px"/>
              </div>
              <div class="col-3">
                  <img src={brand5} width="150px"/>
              </div>
           
                  
             

          </div>  
        );
    }
}
export default Brand;