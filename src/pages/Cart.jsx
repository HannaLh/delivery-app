import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../components/CartItem';
import { clearItems, selectCart } from '../redux/slices/cartSlice';
import FormItem from '../components/FormItem';

export default function Cart() {
    const dispatch = useDispatch();
    const { totalPrice, items } = useSelector(selectCart);;
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    const onClickClear = () => {
        if (window.confirm('Do you want clear the cart?')) {
            dispatch(clearItems());
        }
    }

    return (
        <div className="cart-container">
            <div className="cart-container__header">
                <h3 className="cart-container__heading">Shopping Cart</h3>
                <button className="cart-container__action" onClick={onClickClear}>Remove all</button>
            </div>
            <div className='cart-container__content'>
                <div className='cart-container__user-form'>
                    <FormItem />
                </div>
                <div className='cart-container__cart-items'>
                    {items.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
            <hr/>
            <div className="cart-container__checkout">
                <div className="cart-container__total">
                    <div className="cart-container__subtotal">
                        Subtotal ({totalCount} items): ${totalPrice}
                    </div>
                </div>
                <button className="cart-container__button">Checkout</button>
                <Link to="/"><button className="cart-container__button">Go back to the main page</button></Link>
            </div>
        </div>
    )
}
