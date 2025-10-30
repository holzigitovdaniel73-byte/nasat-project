import React from 'react'
import "./List.scss"
import { useDispatch } from 'react-redux'
import { addWish } from '../../redux/Slice/wishSlice'

// import Carta from "../../assets/svg/carta.svg"
import Wish from '../../assets/svg/wish.svg'
import Cartaa from '../../assets/svg/carta-01.svg'
import Zvezda from '../../assets/svg/jyldyz.svg'
import { Link } from 'react-router-dom'

function ProductList({ data }) {
  const dispatch = useDispatch()
  return (
    <div className='cart'>ls
      <div className='cart-image'>
        <Link to={"/surot"}> <img className='item-image' src={data.thumbnail
        } alt="" />
        </Link>
        <button>Add To Cart</button>
        <div className='discount'>-40%</div>
        <div className='icons'>
          <div className='icon'>
            <img onClick={() => dispatch(addWish(data))} src={Wish} alt="" />
          </div>
          <div className='icon'>
            <img src={Cartaa} alt="" />
          </div>
        </div>
      </div>
      <div className='cart-content'>
        <h2>HAVIT HV-G92 Gamepad</h2>
        <div className='prices'>
          <span className='new-price'>$120</span>
          <span className='old-price'>$160</span>
        </div>
        <div className='rating'>
          <img src={Zvezda} alt="" /> (88)
        </div>
      </div>
    </div>
  )
}

export default ProductList
