import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { name, quantity,seller,key,price,img } = props.product;
      const reviewStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        marginLeft: '200px',
        paddingBottom:'5px'
    }
    return (
        <div className="product">
            <div className="product-name">
                <img src={img} alt=""/>
            </div>
        <div style={reviewStyle}>
            <h4 className="color">{name}</h4>
            <p>Sold by: {seller}</p>
            <p>Quantity: {quantity}</p>
            <p><small>Price: {price}</small></p>
            <button className="order-btn" onClick={() =>props.removeProduct(key)}>Remove</button>
        </div>
        </div>
       
    );
};

export default ReviewItem;