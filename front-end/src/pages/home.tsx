import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/product';
import Cart from '../components/cart';

export default function Home() {

    const catalouge = useSelector(store => store.catalouge);
    const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
                marginTop: 10,
                padding: 10
            }}
        >
            <h2
                style={{
                    margin: 0
                }}
            >Online Cart</h2>
            <button
                style={{
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 20,
                    background: "none",
                    border: "2px solid white",
                    color: 'white',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}
                onClick={()=>setCartOpen(s=>!s)}
            >
                Cart
            </button>
        </nav>
        <div 
            className=' w-screen ' 
            style={{
                boxSizing: "border-box",
                width: "100%",
                display: "flex",
                gap: "30px",
                padding: 10
            }}
        > 
            {catalouge.map(prod => <Product details={prod} key={prod.id} />)}
        </div>
        {cartOpen?<Cart opener={setCartOpen} />:""}
    </div>
  )
}