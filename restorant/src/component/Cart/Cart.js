import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {

    const cartItem=<ul className={classes['cart-items']}>{[{id:'c1',
    name:'Biryani',
    amount:2,
    price:35.54
    }].map((item)=>(<li>{item.name}</li>
    ))}</ul>

  return (
    <Modal>
        {cartItem}
    <div className={classes.total}>
    <span>Total Amount</span>
    <span>35.45</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
    </Modal>
  )
}

export default Cart