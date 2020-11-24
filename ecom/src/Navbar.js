import React from 'react';
import logo from './logo.jpg';
import './Navbar.css';
class Navbar extends React.Component{
    render(){
        return(
        
           <div className="Navbar">
             <div className="Logo">
                <img src={logo} alt="logo" className="Brand"/>
             </div>
             <div className="Menu">
             <ul className="List">
                 <li>Home</li>
                 <li>Product</li>
                 <li>About</li>
                 <li>Contact</li>
                 <li>Account</li>
             </ul>
             </div>
           </div>
        
        

        
        );
    }
}
export default Navbar;