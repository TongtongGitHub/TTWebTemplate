import React, {Component} from 'react';
import Header1 from './header/header1';
// import '../assets/home.scss'

export default function Home() {
    return (
        <div>
            <Header1></Header1>
            <div className="home">
                <h1 className="h-txt">This is Home Page!!!</h1>
            </div>
        </div>
    );
}