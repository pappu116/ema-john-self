import React from 'react';
import './Product.css'


const Product = (props) => {
    const {name,price,seller, img,stock}=props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
             <h4 className="color">{name}</h4>
             <p> by: {seller}</p>
             <br/>
             <p>${price}</p>
             <p><small>only {stock}left in stock - order soon</small></p>
             {/* <button className="orderbtn" onClick={() =>props.handelAddProduct(props.product)}>add to cart</button> */}
             <button className="order-btn" onClick={() =>props.handelAddProduct(props.product)}> 
               Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;