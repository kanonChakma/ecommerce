import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

// import { Cart } from './';
// import { useStateContext} from '../context/StateContext';

export const NavBar = () => {
  return (
    <div className="navbar-container">
    <p className="logo">
      <Link href="/">JSM Headphones</Link>
    </p>

    <button type="button" className="cart-icon">
      <AiOutlineShopping />
      <span className="cart-item-qty">1</span>
    </button>

    {/* {showCart && <Cart />} */}
  </div>
  )
}
