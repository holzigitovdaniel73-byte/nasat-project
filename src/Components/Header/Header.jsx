import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'

import Iconka from "../../assets/svg/iconka.svg"
import Wish from "../../assets/svg/wish.svg"
import Magazin from "../../assets/svg/wish-01.svg"

function Header() {

    return (
        <header className='header' >
            <div className='header-top'>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link>ShopNow</Link> </p>
                <div className='select'>
                    <select>
                        <option value="">ENGLISH</option>
                        <option value="">KGZ</option>
                        <option value="">RUS</option>
                    </select>
                </div>

            </div>
            <nav className='nav'>
                <div className='nav-left'>
                    <Link style={{ color: "black", fontSize: "26px", fontWeight: "800", letterSpacing: "2px" }} to={"/"}>Exclusive</Link>
                    <ul className='text-01'>
                        <li>
                            <Link style={{ color: "black" }} to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link style={{ color: "black" }} to={"/contact"}>Contact</Link>
                        </li>
                        <li>
                            <Link style={{ color: "black" }} to={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link style={{ color: "black" }} to={"/register"}>Signup</Link>
                        </li>
                    </ul>
                </div>
                <div className='nav-right'>
                    <div className='search'>
                        <input className='input' type="text" placeholder='What are you looking for?' />
                        <img src={Iconka} alt="" />
                    </div>
                    <div className='image-11'>
                        <Link to={"/wish"}> <img src={Wish} alt="" /></Link>
                    </div>
                    <div className='image-12'>
                        <Link to={"/magazin"}> <img src={Magazin} alt="" /></Link>
                    </div>
                </div>
            </nav>
            <br />
            <hr />
        </header>
    )
}

export default Header 