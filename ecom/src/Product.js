import React from "react";
import './Product.css';
import Shirt from './Shirt.jpg';
import Shirt2 from './Shirt2.jpg';
import Shirt3 from './Shirt3.jpg';
import Shirt4 from './Shirt4.jpg';
import Shirt5 from './Shirt5.jpg';
import Shirt6 from './Shirt6.jpg';
import Shirt7 from './Shirt7.jpg';
import Shirt8 from './Shirt8.jpg';

class Product extends React.Component{
    render(){
        return(
            <div className="Product">
                <h2 className="Title">Featured Product</h2>
                <div className="Row">
                    <div className="Col-3">
                        <img src={Shirt} alt="shirt"/>
                        <h4>Red Printed shirt</h4>
                         <div className="Ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                         </div>
                         <p>$150.00</p>
                    </div>
                    <div className="Col-3">
                        <img src={Shirt2} alt="Shirt2"/>
                        <h4>Teen Children Clothes</h4>
                         <div className="Ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                         </div>
                         <p>$750.00</p>
                    </div>
                    <div className="Col-3">
                        <img src={Shirt3} alt="shirt3"/>
                        <h4>Kids Designers Dress</h4>
                         <div className="Ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                         </div>
                         <p>$230.00</p>
                    </div>
                    <div className="Col-3">
                        <img src={Shirt4} alt="shirt4"/>
                        <h4>Blue Ball Grown Girls</h4>
                         <div className="Ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half"></i>
                         </div>
                         <p>$567.00</p>
                    </div>
                </div>
                <h2 className="Title">Latest Product</h2>
                <div className="Row">
                    <div className="Col-3">
                        <img src={Shirt5} alt="shirt5"/>
                        <h4>Aquatic Print Midi Dress with Shrug</h4>
                         <div className="Ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                         </div>
                         <p>$150.00</p>
                    </div>
                    <div className="Col-3">
                        <img src={Shirt6} alt="Shirt6"/>
                        <h4>T-Rock Men's Loafer</h4>
                         <div className="Ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                         </div>
                         <p>$750.00</p>
                    </div>
                    <div className="Col-3">
                        <img src={Shirt7} alt="shirt7"/>
                        <h4>Shirts</h4>
                         <div className="Ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                         </div>
                         <p>$230.00</p>
                    </div>
                    <div className="Col-3">
                        <img src={Shirt8} alt="shirt8"/>
                        <h4>Light Beige Model Anarkali Suit Set</h4>
                         <div className="Ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half"></i>
                         </div>
                         <p>$567.00</p>
                    </div>
                    <div className="Col-3">
                        <img src={Shirt} alt="shirt"/>
                        <h4>Red Printed shirt</h4>
                         <div className="Ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                         </div>
                         <p>$150.00</p>
                    </div>
                    <div className="Col-3">
                        <img src={Shirt2} alt="Shirt2"/>
                        <h4>Teen Children Clothes</h4>
                         <div className="Ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                         </div>
                         <p>$750.00</p>
                    </div>
                    <div className="Col-3">
                        <img src={Shirt3} alt="shirt3"/>
                        <h4>Kids Designers Dress</h4>
                         <div className="Ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                         </div>
                         <p>$230.00</p>
                    </div>
                    <div className="Col-3">
                        <img src={Shirt4} alt="shirt4"/>
                        <h4>Blue Ball Grown Girls</h4>
                         <div className="Ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half"></i>
                         </div>
                         <p>$567.00</p>
                    </div>
                
                </div>
                
            </div>
        );
    }
}
export default Product;

