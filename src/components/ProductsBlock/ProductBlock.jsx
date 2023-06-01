import React, {useState}from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./ProductBlock.css"; 

export const ProductBlock = ({ id, title, price, imageUrl }) => {
    // const dispatch = useDispatch();
    // const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
    // const addedCount = cartItem ? cartItem.count : 0;
    const [prodCount, setProdCount] = useState(0);

    const onClickAddProd = () => {
        setProdCount(prodCount + 1);
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
                        <i>{prodCount}</i>
                    </button>
                </div>
            </div>
        </div>
    );
}