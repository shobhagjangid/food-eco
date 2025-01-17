import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {food_list,cartItems,removeFromCart,getTotalCartAmount}=useContext(StoreContext)

  const navigate =useNavigate();
  return (
    <div className='cart '>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Title</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
      
        {food_list.map((item,index)=>{
            if(cartItems[item._id]>0)
            {
              return (
                <div>
                <div className='cart-item-title cart-items-item'>
                  
                  <img src={item.image} alt=''/>
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr/>
                </div>
              )

            }

          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
       
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>₹{getTotalCartAmount()}</p>
        </div>
        <hr/>

        <div className="cart-total-details">
          <p>Delivery Fee </p>
          <p>₹{getTotalCartAmount()===0?0:100}</p>         
        </div>
        <hr/>
       

        <div className="cart-total-details">
          <b>Total</b>
          ₹{getTotalCartAmount()===0?0:getTotalCartAmount()+10}
        </div>
        </div>
        
        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code ,Enter it here </p>
          <div className="cart-promocode-input">
            <input type='text'placeholder='promo code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
      
    </div>
    

  )
}

export default Cart