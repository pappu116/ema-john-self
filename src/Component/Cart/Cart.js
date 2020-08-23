import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart =props.cart;
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total= total + product.price;
        
    }
    let shipping =0;

    if(total >35){
        shipping= 0;
    }else if(total > 15){
        shipping= 4.99
    }else if(total > 0){
        shipping = 12.99
    }

    const formatNumber=num=>{
        const percision = num.toFixed(2);
        return Number(percision)
    }
    const tax = total / 10;
   const grandtotal=(total + shipping +Number(tax)).toFixed(2)
    
    return (
        <div className="cart">
            <h4>Order Summary</h4>
              <p>Items Ordered:{cart.length}</p>
               <p>Product Price: {formatNumber(total)}</p>
              <p><small>Shipping Cost: {shipping}</small></p>
                <p><small>Tax + VAT: {formatNumber(tax)} </small></p>
              <p className="total-price">Total Price:{grandtotal}</p>
              <button className='reviewbtn'>Review Order</button>
        </div>
    );
};

export default Cart;