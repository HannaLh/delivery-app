import React from 'react';
import './ShopCategories.css'

const categories = ['All','McDonalds', 'KFC', 'Burgerking', 'Starbucks', 'PizzaHut', 'SaladStory'];

export default function ShopCategories({ value, onChangeCategory }) {
    return (
        <div className="categories">
                <ul>
                    {categories.map((categoryName, i) => (
                        <li
                            key={i}
                            onClick={() => onChangeCategory(i)}
                            className={value === i ? 'active' : ""}>
                            {categoryName}
                        </li>
                    ))
                    }
                </ul>
            </div>
    )
}
