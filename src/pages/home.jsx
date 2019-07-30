import React, {Component} from 'react';
import Header1 from './header/header1';
import Footer1 from './footer/footer1';
import Nav from './nav/nav';
import '../css/index.scss'

export default function Home() {
    return (
        <div>
            <Header1></Header1>
            <div className="main">
                <Nav></Nav>
                <h1 className="h-txt">This is Home Page!!!</h1>
            </div>
            <Footer1></Footer1>
        </div>
    );
}