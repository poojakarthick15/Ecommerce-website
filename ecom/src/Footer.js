import React from "react";
import './Footer.css';
import logo from './logo.jpg';
import Playstore from './Playstore.png';
import Appstore from './Appstore.png';
class Footer extends React.Component{
    render(){
        return(
         <div className="Footer">
             <div className="Footer-col-1">
                 <h3>Download our App</h3>
                 <p>Download App for Andriod and ios mobile phone.</p>
                 <div className="Applogo">
                     <img src={Playstore} width="120px"/>
                     <img src={Appstore} width="120px"/>

                 </div>
             </div>
             <div className="Footer-col-2">
                <img src={logo} alt="logo" className="Brand"/>
                 <p>Our Purpose Is To Sustainably  Make the Pleasure  and Benefits of Sports Accessible to the Many.</p>
             </div>
             <div className="Footer-col-3">
                 <h3>Useful Link</h3>
                 <ul>
                     <li>Coupons</li>
                     <li>Blog Post</li>
                     <li>Return Policy</li>
                     <li>Join Affiliate</li>
                 </ul>
             </div>
             <div className="Footer-col-4">
                 <h3>Follow us</h3>
                 <ul>
                     <li>Facebook</li>
                     <li>Twitter</li>
                     <li>Instagram</li>
                     <li>YouTube</li>
                 </ul>
             </div>
            
         </div>  
        );
    }
}
export default Footer;