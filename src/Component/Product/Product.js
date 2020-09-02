import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';


const Product = (props) => {
   const { name, img, seller, price,stock,key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h4 className="color"><Link to={"/product/"+key}>{name}</Link></h4>
             <p> by: {seller}</p>
             <br/>
             <p>${price}</p>
             <p><small>only {stock}left in stock - order soon</small></p>
             {/* <button className="orderbtn" onClick={() =>props.handelAddProduct(props.product)}>add to cart</button> */}
              
                { props.showAddToCart &&
                         <button className="order-btn" onClick={() =>props.handelAddProduct(props.product)}> 
                <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}
                
               
            </div>
            
        </div>
    );
};

export default Product;