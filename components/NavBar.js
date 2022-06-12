import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import logo from '../images/Daraz_Logo.png';
import { Cart } from './';
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
        <Image
            src={logo}
            alt="Picture of the author"
            width={200}
            height={70}
          />
        </Link>
      </p> 
       <div className='navbarone'>
      <p className="nav">
        <Link href="/">Home</Link>
      </p>
      <p className="nav">
        <Link href="/all-product">Shop</Link>
      </p>
      <p className="nav">
        <Link href="/">Women Fashion</Link>
      </p>
      <p className="nav">
        <Link href="/">Kids</Link>
      </p>
      <p className="nav">
        <Link href="/">Category</Link>
      </p>
      <p className="nav">
        <Link href="/">Man Fashion</Link>
      </p>
      <p className="nav">
        <Link href="/">Contact</Link>
      </p>
       </div>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar