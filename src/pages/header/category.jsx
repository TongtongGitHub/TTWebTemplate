import React, {useState} from 'react';
import { faStore,faUserCircle,faShoppingCart,faMobileAlt,faChevronDown, faChevronRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let level1Pos = null;
let level2Pos = null;
let level1Timer = null;
let level2Timer = null;
function calculateAngle(start, end) {
    if (start) {
        var diff_x = end.x - start.x,
            diff_y = end.y - start.y;
        if (diff_x <= 0) {
            return 90
        }
        return Math.abs(360 * Math.atan(diff_y / diff_x) / (2 * Math.PI));
    }
    return 90;
}

export default function Category(params) {
    const [curLevel1Element, setCurLevel1Element] = useState(null);
    const [curLevel2Element, setCurLevel2Element] = useState(null);
    return <div className='header-cat max-1024-hide'>
                <div className='header-cat-item' onMouseLeave={e=>{
                    setCurLevel1Element(null);
                    setCurLevel2Element(null);
                }}>
                    <div className='header-cat-title'>Category1 <FontAwesomeIcon className='icon-down' icon={faChevronDown}></FontAwesomeIcon></div>
                    <div className='header-cat-list'>
                        <div className='header-cat-level header-cat-level1'>
                            {
                                [1,2,3,4,5,6,7,8,9,10].map(i => {
                                    return (
                                        <div key={i} className={'header-cat-list-item' + (curLevel1Element === i ? ' hover' : '')}
                                        onMouseMove={e=>{
                                            level1Pos = { x: e.clientX, y: e.clientY };
                                        }}
                                        onMouseEnter={e => {
                                            if (curLevel1Element) {
                                                let moveAngle = calculateAngle(level1Pos, { x: e.clientX, y: e.clientY });
                                                if (moveAngle <= 60) {
                                                    level1Timer = setTimeout(function() {
                                                        setCurLevel1Element(i);
                                                    }, 150);
                                                } else {
                                                    setCurLevel1Element(i);
                                                }
                                            } else {
                                                setCurLevel1Element(i);
                                            }
                                        }}
                                        onMouseLeave={e=>{
                                            clearTimeout(level1Timer);
                                        }}
                                        >
                                            <div className='title'>
                                                level1 item {i}<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                            </div>
                                            <div className='header-cat-level header-cat-level2' onMouseLeave={e=>{
                                                setCurLevel2Element(null);
                                            }}>
                                                {[11,12,13,14,15,16,17,18,19,20].map(j => {
                                                    return (
                                                        <div key={j*i} className={'header-cat-list-item' + (curLevel2Element === j*i ? ' hover' : '')}
                                                        onMouseMove={e=>{
                                                            level2Pos = { x: e.clientX,  y: e.clientY };
                                                        }}
                                                        onMouseEnter={e => {
                                                            if (curLevel2Element) {
                                                                let moveAngle = calculateAngle(level2Pos, { x: e.clientX, y: e.clientY });
                                                                if (moveAngle <= 60) {
                                                                    level2Timer = setTimeout(function() {
                                                                        setCurLevel2Element(j*i);
                                                                    }, 150);
                                                                } else {
                                                                    setCurLevel2Element(i*j);
                                                                }
                                                            } else {
                                                                setCurLevel2Element(i*j);
                                                            }
                                                        }}
                                                        onMouseLeave={e=>{
                                                            clearTimeout(level2Timer);
                                                        }}
                                                        >
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
}