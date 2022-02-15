import React, {useEffect} from 'react';
import Heading from "../components/Heading";
import {useRouter} from "next/router";
import s from '../styles/404.module.scss'

const{wrapper}=s


const Error = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            console.log(router)
            router.push('/')
        },3000)
    },[router])

    return (
        <div className={wrapper}>
            <Heading tag={'h2'} text={'404'}/>
            <Heading tag={'h2'} text={'Something is going wrong'}/>
        </div>
    );
};

export default Error;