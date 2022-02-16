import React from 'react';
import Heading from "../components/Heading";
import s from '../styles/Home.module.scss'
import Head from "next/head";


const {wrapper,textFooterBlock,textFooterBlockElement} = s;

const Home = () => {
    return (
        <div className={wrapper}>
            <Head>
                <title>Home</title>
            </Head>
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
