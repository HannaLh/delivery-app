import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';

export default function CartItem({ id, title, description, price, count, imageUrl }) {
    const dispatch = useDispatch();
    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
            })
        )
    }

    const onClickMinus = () => {
        dispatch(
            minusItem(id)
        )
    }

    const onClickRemove = () => {
        if (window.confirm('Are you sure you want to remove this item?')) {
            dispatch(removeItem(id));
        }
    }

    return (
        <div className="cart-item">
            <div className="cart-item__image-box">
                <img className='cart-item__image' src={imageUrl} alt="cart item" width="190" height="200"></img>
            </div>
            <div className="cart-item__about">
                <h1 className="cart-item__title">{title}</h1>
                <h3 className='cart-item__description'>{description}</h3>
            </div>
            <div className="cart-item__counter">
                <button className="cart-item__btn" onClick={onClickPlus}>+</button>
                <div className="cart-item__count">{count}</div>
                <button className="cart-item__btn" disabled={count === 1} onClick={onClickMinus} >-</button>
            </div>
            <div className="priccart-item__prices">
                <div className="cart-item__amount">${price * count}</div>
                <button className="cart-item__remove" onClick={onClickRemove}><u>Remove</u></button>
            </div>
        </div>
    )
}