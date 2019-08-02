import React, {useState} from 'react';
import { faStore,faUserCircle,faShoppingCart,faMobileAlt,faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header1(){
    const [showLevel2,setShowLevel2] = useState(false);
    const [showLevel3,setShowLevel3] = useState(false);
    const [level1ItemId,setLevel1ItemId] = useState(null);
    const [level2ItemId,setLevel2ItemId] = useState(null);
    const [level3ItemId,setLevel3ItemId] = useState(null);
    return (
        <div className='header'>
            <div className='header-main'>
                <div className='header-logo'>
                    <FontAwesomeIcon icon={faStore} />
                </div>
                <div className='header-search'>
                    <input className='input input-text'></input>
                    <button className='btn btn-search'>Search</button>
                </div>
                <div className='header-info'>
                    <div className='header-account'>
                        <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                    </div>
                    <div className='header-cart'>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </div>
                    <div className='header-app'>
                        <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className='header-cat'>
                <div className='header-cat-item' onMouseLeave={(e)=>{
                }}>
                    <div className='header-cat-title'>Category1 <FontAwesomeIcon className='icon-down' icon={faChevronDown}></FontAwesomeIcon></div>
                    <div className='header-cat-list'>
                        <div className='header-cat-level header-cat-level1' onMouseEnter={(e)=> {}}>
                            {
                                [1,2,3,4,5,6,7,8,9,10].map(i => {
                                    return (
                                        <div key={i} className={'header-cat-list-item'}>
                                            <div className='title'>level1 item {i}<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></div>
                                            <div className='header-cat-level header-cat-level2'>
                                                {[1,2,3,4,5,6,7,8,9,10].map(j => {
                                                    return (
                                                        <div key={j} className='header-cat-list-item'>
                                                            <div className='title'>level2 item {i*j}<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></div>
                                                            <div className='header-cat-level header-cat-level3'>
                                                                {[1,2,3,4,5,6,7,8,9,10].map(k => {
                                                                    return (
                                                                        <div key={k} className='header-cat-list-item'>
                                                                            <div className='title'>level3 item {i*j*k}</div>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}