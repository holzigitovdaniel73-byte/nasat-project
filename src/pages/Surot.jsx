import React from 'react'
import "./Surot.scss"

import Plaice from "../assets/svg/plaice.svg"
import Sony from "../assets/svg/sony.svg"

function Surot() {
  return (
    <div>
      <div className='taishin'>
        <div className='plaice-01'>
          <img src={Plaice} alt="" />
        </div>
        <div className='plaice-02'>
          <img src={Plaice} alt="" />
        </div>
        <div className='plaice-03'>
          <img src={Plaice} alt="" />
        </div>
        <div className='plaice-04'>
          <img src={Plaice} alt="" />
        </div>
        <div className='sony'>
        <img src={Sony} alt="" />
      </div>
      </div>
      
    </div>
  )
}

export default Surot
