import React, {useState} from 'react';
import { faStore,faUserCircle,faShoppingCart,faMobileAlt,faChevronDown, faChevronRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Menu(props){
    const [showMenu, setShowMenu] = useState(false);
    const [curMenuId, setCurMenuId] = useState(0);
    return (
        <div className='header-menu max-1024-show'>
            <div className='header-menu-icon' onClick={e=> {
                setShowMenu(true);
            }}>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </div>
            <div className={'header-menu-content' + (showMenu ? ' header-menu-show' : '')}>
            {
                curMenuId === 0 &&
                <div className='header-menu-level'>
                    <div className='header-menu-item' onClick={e=>{
                        setCurMenuId(1);
                    }}>
                        Category<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                    </div>
                </div>
            }
            {
                curMenuId === 1 &&
                <div className='header-menu-level'>
                    {
                        [1,2,3,4,5].map(item => {
                            return (
                                <div key={item} className='header-menu-item'>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            }
            </div>
            
            <div className={'header-mask' + (showMenu ? ' show' : '')} onClick={e=>{
                setShowMenu(false);
                setCurMenuId(0);
            }}></div>
        </div>
    );
}