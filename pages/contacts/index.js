import React from 'react';
import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {contacts: data}
    }
}

const Contacts = ({contacts}) => {

    return (
        <>
            <Head>
                <title>Contacts list</title>
            </Head>
            <Heading tag={'div'} text={'Id list'}/>
            <ul>
                {contacts?.map(({id, name, email}) => <li key={id}>
                    <Link href={`/contacts/${id}`}>
                        <a style={{color: 'black', fontWeight: 'bold', cursor: 'pointer',textDecoration:'none'}}>{name}</a></Link> email : {email}</li>)}
            </ul>
        </>
    );
};

export default Contacts;