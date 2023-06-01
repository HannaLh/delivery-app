import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Card.css"; 

export const ProductBlock = ({ id, title, price, imageUrl }) => {
    // const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAddProd = () => {
        const item = {
            id,
            title,
            price,
            imageUrl,
        };
        // dispatch(addItem(item));
    }

    return (
        <div className='item-card-wrap'>
            <div className='item-card'>
                <img src={imageUrl} alt='Food' width="309" height="209"></img>
                <div className='item-card__price'>
                    <h3>{title}</h3>
                    <span>{price} $</span>
                </div>
                <div className='cart-button'>
                    <button onClick={onClickAddProd} className='cart-button__add'>+ Add to Bag
                        {addedCount > 0 && <i className='cart-button__counter'>{addedCount}</i>}
                    </button>
                </div>
            </div>
        </div>
    )
}