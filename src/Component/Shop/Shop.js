import React, { useState, useEffect } from 'react';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Product from '../Product/Product';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([])
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousProduct = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey)
            product.quantity = savedCart[existingKey]
            return product
        })
        setCart(previousProduct)
    },[])
    const handelAddProduct = (product) => {
        const toBeAddedKey = product.key;
        //nan value changing function
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey)
        let newCart;
        let count = 1;
        if (sameProduct) {
             count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
             newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1
            newCart=[...cart, product];
       }
        setCart(newCart);
        addToDatabaseCart(product.key, count)
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
              {
                  product.map(prd=>
                  <Product
                          handelAddProduct={handelAddProduct}
                          key={prd.key}
                          showAddToCart={true}
                        product ={prd}>
                         
                     </Product>)
              }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                <button className='reviewbtn'><FontAwesomeIcon icon={faShoppingCart} />Review Order</button>
            </Link>
             </Cart>
            </div>
        </div>
    );
};

export default Shop;