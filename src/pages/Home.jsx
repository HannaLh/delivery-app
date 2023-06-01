import React, { useState, useEffect }from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Header from '../components/Header/Header';
import ShopCategories from '../components/ShopCategories/ShopCategories';
import { setCategoryId } from '../redux/slices/filterSlice';
import { ProductBlock } from '../components/ProductsBlock/ProductBlock';
import LoadingSpinner from '../components/ProductsBlock/LoadingSpinner';


export default function Home() {
    const dispatch = useDispatch();
    const categoryId = useSelector(state => state.filter.categoryId);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://645513ffa74f994b3351784a.mockapi.io/food-positions?${category}`)
            .then(res => {
                setItems(res.data);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, [categoryId])

    const products = items.map((obj) => <ProductBlock key={obj.id}{...obj} />);
    const loading = [...new Array(6)].map((_, index) => <LoadingSpinner key={index} />);

    return (
        <div>
            <Header />
            <div className='container food-container'>
                <div className='products'>
                    <div className='products-categories'>
                        <ShopCategories value={categoryId} onChangeCategory={(i) => setCategoryId(i)}/>
                    </div> 
                </div>
                <div className="card-flex"> {isLoading ? loading : products} </div>
            </div>
        </div>
    )
};
