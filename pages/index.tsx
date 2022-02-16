import Heading from '../components/Heading';
import s from '../styles/Home.module.scss'
import Head from 'next/head';
import Socials from '../components/Socials';


const {wrapper, textFooterBlock, textFooterBlockElement} = s;

export const getStaticProps = async () => {
    try {
        const baseURL = process.env.API_HOST
        const res = await fetch(`${baseURL}/socials/`)
        const data = await res.json()
        if (!data) {
            return {
                notFound: true
            }
        }
        return {
            props: {socials: data}
        }
    } catch (err) {
        return {
            props: {socials: null}
        }
    }
}


const Home = ({socials}) => {
    return (
        <div className={wrapper}>
            <Head>
                <title>Home</title>
            </Head>
            <Heading tag={'h1'} text={'Next JS App!'}/>
            {socials && <Socials socials={socials}/>}

        </div>
    );
};


export default Home
