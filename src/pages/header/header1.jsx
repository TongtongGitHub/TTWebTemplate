import React, {useState} from 'react';
import { faStore,faUserCircle,faShoppingCart,faMobileAlt,faChevronDown, faChevronRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Category from './category';
import Menu from './menu';
import ShoppingCart from './shoppingCart';


export default function Header1(){
    return (
        <div className='header'>
            <div className='header-main'>
                <Menu></Menu>
                <div className='header-logo'>
                    <a href='/'>
                        <FontAwesomeIcon icon={faStore} />
                    </a>
                </div>
                <div className='header-search'>
                    <input className='input input-text'></input>
                    <button className='btn btn-search'>Search</button>
                </div>
                <div className='header-info'>
                    <div className='header-account'>
                        <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                    </div>
                    <ShoppingCart></ShoppingCart>
                    <div className='header-app'>
                        <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <Category></Category>
        </div>
    );
}