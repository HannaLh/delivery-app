import React, {useState}from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./ProductBlock.css";
import { addItem, selectCartItemById } from '../../redux/slices/cartSlice';

export const ProductBlock = ({ id, title, description, price, imageUrl }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItemById(id));
    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAddProd = () => {
        const item = {
            id,
            title,
            price,
            imageUrl
        };
        dispatch(addItem(item));
    }

    return (
        <div className='item-card'>
                <img className='item-card-img' src={imageUrl} alt='Food' width="250" height="209"></img>
            <div className='item-card__info'>
                    <div className='item-card__info-content'>
                        <h3 className='item-card__info-title'>{title}</h3>
                        <span className='item-card__info-price'>{price} $</span>
                    </div>
                    <h4 className='item-card__info-description'>{description}</h4>
                </div>
                <div className='cart-button'>
                    <button onClick={onClickAddProd} className='cart-button__add'>+ Add to Bag
                        {addedCount > 0 && <i className='cart-button__counter'>{addedCount}</i>}
                    </button>
                </div>
        </div>
    );
}