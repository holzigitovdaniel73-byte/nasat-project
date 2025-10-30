import React from 'react'
import "./WishCard.scss"
import { removeWish } from "../../redux/Slice/wishSlice"

import Surot from "../../assets/svg/surot.svg"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'


function WishCard({ card }) {
    const dispatch = useDispatch()
    return (
        <div className='klass'>
            <div className='igor'>
                <div className='vep'>
                    <div><img style={{ width: "172px", height: "152px", }} src={card.thumbnail} alt="" /></div>
                    <div className='at' style={{
                        width: "34", height: "76px", gap: "8px", display: "flex", flexDirection: "column"
                    }}>
                      {/* <Link to={"/delete"}> */}
                       <img onClick={() => dispatch(removeWish(card.id))} style={{ width: "34px", height: "34px" }} src={Surot} alt="" />
                       {/* </Link>  */}


                    </div>

                    <div className='button1' style={{ width: "56px", height: "26px", backgroundColor: "red", borderRadius: "4px", textAlign: "center", color: "#fff", border: "none" }}>-35%</div>

                    <button className='button'>
                        <img onClick={() => dispatch(removeWish(card.id))} src="" alt="" />
                        Add To Cart</button>

                </div>
                <div className='vep1'>

                    <h5>Gucci duffle bag</h5>
                    <div className='mini'>
                        <p style={{ color: "red" }}>$960</p>
                        <p style={{ color: "rgba(0, 0, 0, 0.54)", textDecoration: "line-through" }}>$1160</p>
                    </div>



                </div>
            </div>,
        </div>
    )
}

export default WishCard
