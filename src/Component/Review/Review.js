import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyEnd from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const removeProduct = (productKeys) => {
        const newCart = cart.filter(pd => pd.key !== productKeys)
        setCart(newCart)
        removeFromDatabaseCart(productKeys);
    }
    //handel click place order 
     const [orderPlaced,setorderPlaced] = useState([false])
    const orderPlaceHandel=() => {
        setCart([]);
        setorderPlaced(true);
        processOrder()
    }
    let thankyou;
    if (orderPlaced === true) {
        thankyou = <img src={happyEnd} alt=""/>
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity= savedCart[key]
            return product
        })
        setCart(cartProduct)
    },[])
    return (
        <div className="shop-container">
            <div className="product-container">
                  {
                    cart.map(pd => <ReviewItem product={pd}
                    key ={pd.key}
                    removeProduct={removeProduct}>
                    
                    </ReviewItem>)
                    
                }
                {
                    thankyou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={orderPlaceHandel}  className="order-btn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;