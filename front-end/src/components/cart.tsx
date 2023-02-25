import React from 'react'
import { useSelector } from 'react-redux'
import CartElement from './cartElement'

export default function Cart(props) {

  const cart = useSelector(state=>state.cart)

  return (
    <div
      style={{
        width: "30%",
        height: "100vh",
        position: "fixed",
        top: 0,
        right: 0,
        background: '#4f4f4f',
        padding: 10
      }}
    >
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          marginBottom: 10,
        }}
      >
        <h3
          style={{
            margin: 0
          }}
        >In your cart</h3>
        <button
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 20,
            paddingTop: 10,
            paddingBottom: 10,
            color: 'white',
            background: 'transparent',
            border: "2px white solid",
            fontWeight: "bold",
          }}
          onClick={()=>props.opener(s=>!s)}
        >close</button>
      </span>
      {cart.map(prod=><CartElement detail={prod} />)}
    </div>
  )
}
