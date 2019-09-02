import React, {useState,useEffect,useRef} from 'react';
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swiper from 'swiper';
import Header1 from './header/header1';
import Footer1 from './footer/footer1';

export default function ProductDetail() {
    const [curImgNum, setCurImgNum] = useState(1);
    const [rightImgNum, setRightImgNum] = useState(6);
    useEffect(() => {
        
    }, []);
    let data = [1,2,3,4,5,6,7,8]
    return (
        <div>
            <Header1></Header1>
            <div className="prod-detail">
                <div className='prod-detail-section'>
                <div className='prod-detail-img'>
                    {
                        data.map(item=>{
                            return (
                                <div key={item} className={'img-wrap' + (item === curImgNum ? ' show-block' : ' hide')}>
                                    <img src={'https://via.placeholder.com/1000x1000?text=' + item}></img>
                                </div>
                            )
                        })
                    }
                    <div className='img-list'>
                        <div className={'img-list-prev' + (curImgNum === data[0] ? ' disabled' : '')}
                        onClick={e => {
                            if (curImgNum !== data[0]) {
                                if (curImgNum < rightImgNum - 4) {
                                    setCurImgNum(curImgNum - 1);
                                    setRightImgNum(rightImgNum - 1);
                                } else {
                                    setCurImgNum(curImgNum - 1);
                                }
                            }
                        }}>
                            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                        </div>
                        {
                            data.map(item=>{
                                return (
                                    <div key={item} className={'img-list-item' + 
                                    (item === curImgNum ? ' selected' : '') + (rightImgNum - item >= 6 || item > rightImgNum ? ' hide':'')}
                                    onClick={e=>{
                                        setCurImgNum(item);
                                    }}>
                                        <img src={'https://via.placeholder.com/80x80?text=' + item}></img>
                                    </div>
                                )
                            })
                        }
                        <div className={'img-list-next' + (curImgNum === data[data.length - 1] ? ' disabled' : '')}
                        onClick={e => {
                            if (curImgNum !== data[data.length - 1]) {
                                if (curImgNum + 1 > rightImgNum) {
                                    setCurImgNum(curImgNum + 1);
                                    setRightImgNum(rightImgNum + 1);
                                } else {
                                    setCurImgNum(curImgNum + 1);
                                }
                            }
                        }}>
                            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
                <div className='prod-detail-info'>
                    <div className='title'>This is title</div>
                    <div className='price'>$1000</div>
                    <div className='item'>
                        <div className='label'>label</div>
                        <div className='value'>value</div>
                    </div>
                    <div className='item'>
                        <div className='label'>label</div>
                        <div className='value'>value</div>
                    </div>
                    <div className='item'>
                        <div className='label'>label</div>
                        <div className='value'>value</div>
                    </div>
                </div>
                </div>
            </div>
            <Footer1></Footer1>
        </div>
    );
}