import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'



const Product = ({product,handelAddToCart}) => {
    // const {product,handelAddToCart}=props;
    const {name,img,price,seller,ratings} =product;

    // const {handelAddToCart}=props;
 
    return (
        

        <div className='product'>
            <div> 
            <img src={img} alt="" />
            </div>
          

            <div className='products-nfo'>
            <p className='products-name'>{name}</p>
            <p>Price:${price}</p>
        <p><small>Seller:{seller}</small></p>
        <p><small>Ratings:{ratings} stars</small></p>
            </div>
            
            <button onClick={()=>handelAddToCart(product)} className='button-cart'>
    <p className='button-text'>Add to Cart</p>
    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
</button>
        </div>
    
    );
};

export default Product;