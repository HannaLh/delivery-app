import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg';
import './Header.css';

export default function Header() {
    const {items, totalPrice} = useSelector(state => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-nav'>
                    <Link to="/">
                        <img width="100" height="50" src={Logo} alt="logo"></img>
                    </Link>
                    <Link to="/cart" className="cart-ref">
                        Shopping Cart:
                        <span>{totalCount} item</span>
                        <span>{totalPrice}$</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}
