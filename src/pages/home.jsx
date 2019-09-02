import React, {Component,useEffect} from 'react';
import Swiper from 'swiper';
import Header1 from './header/header1';
import Footer1 from './footer/footer1';

export default function Home() {
    useEffect(() => {
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            loop: true,
        
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
        
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
    }, []);
    return (
        <div>
            <Header1></Header1>
            <div className='home'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <a href='/special' className='home-banner' style={{backgroundColor: '#fff',backgroundImage: 'url(https://via.placeholder.com/1500x300)'}}></a>
                        </div>
                        <div className="swiper-slide">
                            <a href='/special' className='home-banner' style={{backgroundColor: '#fff',backgroundImage: 'url(https://via.placeholder.com/1500x300)'}}></a>
                        </div>
                        <div className="swiper-slide">
                            <a href='/special' className='home-banner' style={{backgroundColor: '#fff',backgroundImage: 'url(https://via.placeholder.com/1500x300)'}}></a>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <div className='home-prod'>
                    {
                        [1,2,3,4,5,6,7,8,9,10,11,12].map(item =>{
                            return (
                            <div key={item} className='home-prod-item'>
                                <div className='img-wrap'>
                                    <a href='/productDetail'><img src='https://via.placeholder.com/300x300'></img></a>
                                </div>
                                <div className='name'>item</div>
                                <div className='desc'>This is an item This is an item This is an item</div>
                            </div>
                            );
                        })
                    }
                </div>
                <div className='home-industry'>
                    <a className='home-industry-image max-1024-hide'>
                        <img src='https://via.placeholder.com/300x380'></img>
                        <div className='home-industry-info'>
                            <div className='home-industry-title'>Industry</div>
                            <button className='btn btn-main'>Click me</button>
                        </div>
                    </a>
                    <div className='home-industry-prod'>
                        {
                            [1,2,3,4,5,6,7,8].map(item =>{
                                return (
                                    <a href='/productDetail' key={item} className='home-industry-item'>
                                        <img src='https://via.placeholder.com/300x300'></img>
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
                <div className='home-form'>
                    <div className='home-form-bg'>
                    </div>
                    <div className='home-form-info max-768-hide'>
                        <div className='title'>This Is Title</div>
                        <div className='desc'>This is desc This is desc This is desc This is desc This is desc This is desc </div>
                    </div>
                    <div className='home-form-wrap'>
                        <div className='title'>This Is Title</div>
                        <input className='input' placeholder='Please enter your name'></input>
                        <input className='input' placeholder='Please enter your phone'></input>
                        <input className='input' placeholder='Please enter your advice'></input>
                        <button className='btn btn-main'>Submit</button>
                    </div>
                </div>
            </div>
            <Footer1></Footer1>
        </div>
    );
}