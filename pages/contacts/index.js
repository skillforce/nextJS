import React, {useEffect, useState} from 'react';
import Heading from "../../components/Heading";
import Head from "next/head";

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
            <Heading tag={'div'} text={'Contact list'}/>
            <ul>
                {contacts?.map(({id, name, email}) => <li key={id}><i
                    style={{color: 'black', fontWeight: 'bold'}}>{name}</i> email : {email}</li>)}
            </ul>
        </>
    );
};

export default Contacts;