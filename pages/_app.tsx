import '../styles/globals.scss'
import Layout from "../components/Layout";
import bigImg from '../public/test_big_img.png'
import Image from "next/image";
import Head from "next/head";
import {AppProps} from 'next/app';

const MyApp = ({Component, pageProps}:AppProps) => {
    return (
        <Layout>
            <Head>
                <title>App</title>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;1,200&display=swap" rel="stylesheet"/>
            </Head>
            <main>
                <Component {...pageProps} />
            </main>
            <Image src={bigImg}
                   height={900}
                   placeholder={"blur"}
                   alt={'bigImg'}/>
        </Layout>
    )
}

export default MyApp
