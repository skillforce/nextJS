import React from 'react';
import Heading from "../components/Heading";
import s from '../styles/Home.module.scss'

const {wrapper,textFooterBlock,textFooterBlockElement} = s;

const Home = () => {
    return (
        <div className={wrapper}>
            <Heading text={'Hello world!'}/>
            <div className={textFooterBlock}>
                <div className={textFooterBlockElement}>
                    it is test message
                </div>
                <div className={textFooterBlockElement}>
                    it is test message
                </div>
            </div>

        </div>
    );
};


export default Home
