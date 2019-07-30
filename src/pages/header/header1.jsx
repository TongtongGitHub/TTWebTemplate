import React, {useState} from 'react';
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header1(){
    const [headerdata,setHeaderData] = useState({});
    return (
        <div className='header'>
            <div className='header-main'>
                <div className='header-logo'>
                    <FontAwesomeIcon icon={faBlog} />
                </div>
                <div className='header-search'></div>
                <div className='header-info'></div>
            </div>
        </div>
    );
}