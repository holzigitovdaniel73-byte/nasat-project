import React from 'react'
import "./Baner.scss"
import selector from "../../assets/svg/chon.svg"


function Baner() {
  return (
    <div className='wrapper'>
      <div className='cartinka'>
        <img src={selector} alt="" />
      </div>
    </div>
  )
}

export default Baner
