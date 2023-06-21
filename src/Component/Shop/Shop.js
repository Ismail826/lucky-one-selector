import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
   
   

    useEffect(()=>{
       
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handelAddToCart=(selectProduct)=>{
        if(cart.length <4){
            console.log(selectProduct);
            const newCart=[...cart,selectProduct];
            setCart(newCart);
}
    else{
        alert("You can't select more than 4 product.");
    }
    
}

const handleChooseAgain = () => {
    let ChooseCart = [];
    setCart(ChooseCart);
}


    return (
        <div className="shop-container">

        <div className="products-container">

{
    products.map((product)=> <Product key={product.id} product={product} handelAddToCart={handelAddToCart} ></Product>)
    
    // key={product.id} 
}
            </div>

{/* cart section */}
            <div className="cart-container">

<Cart cart={cart} handleChooseAgain = {handleChooseAgain}></Cart>

</div>
        </div>
    );
};

export default Shop;