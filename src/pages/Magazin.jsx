  import React, { useState } from 'react'
  import { Link } from 'react-router-dom'
  import Carta from '../assets/svg/carta.svg'


  function Magazin() {
    const [quantity, setQuantity] = useState(2)  

    const increase = () => {
      if (quantity < 99) setQuantity(quantity + 1)
    }

    const decrease = () => {
      if (quantity > 0) setQuantity(quantity - 1)
    }

    return (
      <div className='div'>
        <div className='new-text'>
          <Link className='home-link' to={"/"}>Home</Link>
          <p>/</p>
          <Link className='cart-link'>Cart</Link>
        </div>

        <br /><br />
        <div className='new-ramka'>
          <div className='new-link'>
            <Link className='link-01' to={"/product"}>Product</Link>
            <Link className='link-02' to={"/price"}>Price</Link>
            <Link className='link-03' to={"/quantity"}>Quantity</Link>
            <Link className='link-04' to={"/subtotal"}>Subtotal</Link>
          </div>
        </div>

        <br /><br /><br /><br /><br />
        <div className='new-ramka-01'>
          <div className='new-p'>
            <img  className='new-carta' src={Carta} alt="" />
            <p className='new-san'>H1 Gamepad</p>
            <p>$550</p>

            <div className="number-input">
              <input
                type="text"
                value={quantity.toString().padStart(2, '0')}
                readOnly
              />
              <div className="buttons">
                <button onClick={increase}>▲</button>
                <button onClick={decrease}>▼</button>
              </div>
            </div>

            <p>$1100</p>
          </div>
        </div>

        <br />
        <div className='new-button'>
          <button className='button-02'>Return To Shop</button>
          <button className='button-01'>Update Cart</button>
        </div>

        <br /><br /><br />
        <div className='new-input'>
          <input className='input' type="text" placeholder='Coupon Code' />
          <button className='button-input'>Apply Coupon</button>

          <div className="cart-box">
            <h3>Cart Total</h3>

            <div className="row">
              <span className='span-01'>Subtotal:</span>
              <input type="text"  />
              <span>$1750</span>
            </div>

            <div className="row">
              <span>Shipping:</span>
              <input type="text" />
              <span>Free</span>
            </div>

            <div className="row total">
              <span>Total:</span>
              <input type="text" />
              <span>$1750</span>
            </div>

            <button className="checkout-btn">Proceed to checkout</button>
          </div>
        </div>
      </div>
    )
  }

  export default Magazin

