import React, {FC} from 'react';
import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
import {GetStaticProps} from 'next';
import {Contact} from '../../types';

export const getStaticProps:GetStaticProps = async () => {
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


type ContactsProps ={
    contacts:Contact[]
}

const Contacts:FC<ContactsProps> = ({contacts}) => {

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