import React, {useState} from 'react';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer1(){
    return (
        <div className='footer'>
            <div className='footer-copyright'>
                <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
                <span>Template</span>
            </div>
        </div>
    );
}