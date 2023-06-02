import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/Logo.svg';
import './Header.css';
import { selectCart } from '../../redux/slices/cartSlice';

export default function Header() {
    const { items, totalPrice } = useSelector(selectCart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-nav'>
                    <Link to="/">
                        <img width="100" height="50" src={Logo} alt="logo"></img>
                    </Link>
                    <Link to="/cart" className="header-nav__cart-ref">
                        Shopping Cart:
                        <span className="header-nav__span header-nav__item-count">{totalCount} item(s)</span>
                        <span className="header-nav__span header-nav__total-price">{totalPrice}$</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}
