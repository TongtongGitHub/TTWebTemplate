import React, {useState,useEffect,useRef} from 'react';
import Swiper from 'swiper';
import Header1 from './header/header1';
import Footer1 from './footer/footer1';

export default function Home() {
    const [fixedNav, setFixedNav] = useState(false);
    const [curNav, setCurNav] = useState(null);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
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
          window.addEventListener('scroll', handleScroll);
          handleScroll();
    }, []);
    let distances = [];
    function handleScroll(e) {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > $('.special-nav-placeholder').offset().top) {
            setFixedNav(true);
        } else {
            setFixedNav(false);
        }
        //计算各个导航模块和滚动高度的差值
        $('.special-section').each(function () {
            var distance = scrollTop - $(this).offset().top;
            var hash = $(this).attr('data-anchor');
            distances[hash] = distance;
        });
        var curDistance = null;
        var curAnchor = null;
        for (const key in distances) {
            if (distances.hasOwnProperty(key)) {
                const element = distances[key];
                if ((element > -70 && (element < curDistance || !curDistance))) {
                    curDistance = element;
                    curAnchor = key;
                }
            }
        }
        if (curAnchor) {
            window.location.hash = curAnchor;
            setCurNav(curAnchor);
        }
    }

    function scrollToItem(ref) {
        window.scrollTo(0, ref.current.offsetTop-60);
    }

    return (
        <div>
            <Header1></Header1>
            <div className="special">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <a href='' className='special-banner' style={{backgroundColor: '#fff',backgroundImage: 'url(https://via.placeholder.com/1500x300)'}}></a>
                        </div>
                        <div className="swiper-slide">
                            <a href='' className='special-banner' style={{backgroundColor: '#fff',backgroundImage: 'url(https://via.placeholder.com/1500x300)'}}></a>
                        </div>
                        <div className="swiper-slide">
                            <a href='' className='special-banner' style={{backgroundColor: '#fff',backgroundImage: 'url(https://via.placeholder.com/1500x300)'}}></a>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <div className='special-nav-placeholder'>
                    <div className={'special-nav' + (fixedNav ? ' fixed' : '')}>
                        <div className={'special-nav-item' + (curNav === 'section1' ? ' hover' : '')} onClick={e=>{
                            scrollToItem(section1Ref)
                        }}>
                        Seciton1
                        </div>
                        <div className={'special-nav-item' + (curNav === 'section2' ? ' hover' : '')} onClick={e=>{
                            scrollToItem(section2Ref)
                        }}>
                        Seciton2
                        </div>
                        <div className={'special-nav-item' + (curNav === 'section3' ? ' hover' : '')} onClick={e=>{
                            scrollToItem(section3Ref)
                        }}>
                        Seciton3
                        </div>
                        <div className={'special-nav-item' + (curNav === 'section4' ? ' hover' : '')} onClick={e=>{
                            scrollToItem(section4Ref)
                        }}>
                        Seciton4
                        </div>
                    </div>
                </div>
                <div className='special-section' data-anchor='section1' ref={section1Ref}>
                    <div className='special-title'>Seciton1</div>
                    <div className='special-content'>
                    </div>
                </div>
                <div className='special-section' data-anchor='section2' ref={section2Ref}>
                    <div className='special-title'>Seciton2</div>
                    <div className='special-content'>
                    </div>
                </div>
                <div className='special-section' data-anchor='section3' ref={section3Ref}>
                    <div className='special-title'>Seciton3</div>
                    <div className='special-content'>
                    </div>
                </div>
                <div className='special-section' data-anchor='section4' ref={section4Ref}>
                    <div className='special-title'>Seciton4</div>
                    <div className='special-content'>
                    </div>
                </div>
            </div>
            <Footer1></Footer1>
        </div>
    );
}