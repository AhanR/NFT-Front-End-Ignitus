import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartElement from './cartElement'
import { Link } from 'react-router-dom'

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
            cursor: 'pointer',
          }}
          onClick={()=>props.opener(s=>!s)}
        >close</button>
      </span>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          padding: 10,
          display: 'flex',
          justifyContent: 'space-between',
          width: '30%',
        }}
      >
        <Link
          style={{
            borderRadius: 20,
            padding: 15,
            color: 'white',
            border: "none",
            background: "#3d85c1",
            fontWeight: "bold",
            width: "100%",
            textDecoration: "none",
            textAlign: 'center',
          }}
          to={"/checkout"}
        >
          Check out
        </Link>
      </div>
      {cart.map(prod=><CartElement detail={prod} key={prod} />)}
    </div>
  )
}
