import React, {useState,useEffect} from 'react';
import { faStore,faUserCircle,faShoppingCart,faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import actions from '../../redux/action/shoppingCart';
import {useSelector, useDispatch} from 'react-redux';

function ShoppingCart(props) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.shoppingCart);
    useEffect(() => {
        dispatch(actions.shoppingCartLoadData());
    }, [])
    let content = <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>;
    if (!data.isLoading) {
        if (data.cartList.length === 0) {
            content = <div>Empty</div>;
        } else {
            content = data.cartList.map(item=>{
                return (
                    <div key={item.id} className='header-cart-item'>
                        <div className='img-wrap'>
                            <img src='https://via.placeholder.com/100x100'></img>
                        </div>
                        <div className='name'>{item.name}</div>
                        <div className='price'>${item.price} * {item.number}</div>
                        <div className='operation' onClick={e=>{
                            dispatch(actions.shoppingCartDeleteData(item))
                        }}>Delete</div>
                    </div>
                )
            })
        }
    }
    return (
        <div className='header-cart'>
            <div className='header-cart-title'>
                <FontAwesomeIcon icon={faShoppingCart} onClick={e=>{
                    dispatch(actions.shoppingCartUpdateData({}));
                }}></FontAwesomeIcon>
                { data.totalNumber > 0 && <div>{data.totalNumber}</div>}
                <div className='header-cart-content'>
                {content}
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;