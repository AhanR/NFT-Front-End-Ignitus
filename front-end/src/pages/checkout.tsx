import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartElement from '../components/cartElement';
import { Link } from 'react-router-dom';
import { removeFromCatalouge } from '../reducers/catalouge';
import { clearCart } from '../reducers/cart';

export default function Checkout() {

  const cart = useSelector(s=>s.cart)
  const catalouge = useSelector(s=>s.catalouge)
  const dispatcher = useDispatch();
  const [totalCost, setTotalCost] = useState(catalouge.filter(e=>cart.includes(e.id)).reduce((a,b)=>a+b.price,0));
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
                    margin: 0,
                }}
            >Online Cart</h2>
        </nav>
        <div
          style={{
            margin: 10,
            fontSize: "1.2rem"
          }}
        >
          Total cost: ₹{totalCost}
        </div>
        <div
          style={{
            display: 'flex',
            gap: 10,
            padding: 10,
            height: "2.4rem",
          }}
        >
          <Link
            style={{
                borderRadius: 20,
                color: 'white',
                border: "none",
                textDecoration: "none",
                textAlign: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                display: 'flex',
                alignItems: 'center',
                background: "#3d85c1",
                fontWeight: 'bold',
            }}
            to={"/"}
            onClick={async ()=> {
              dispatcher(removeFromCatalouge(cart))
              dispatcher(clearCart(""))
            }}
          >
            make payment
          </Link>
          <Link
            style={{
                borderRadius: 20,
                color: 'white',
                border: "2px solid white",
                textDecoration: "none",
                textAlign: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                display: 'flex',
                alignItems: 'center'
            }}
            to={"/"}
          >
            continue shopping
          </Link>
        </div>
        {cart.map(id=><CartElement detail={id} key={id}/>)}
    </div>
  )
}
