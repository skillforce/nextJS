import React from 'react';
import Head from 'next/head';
import ContactInfo from '../../components/ContactInfo';
import {GetServerSideProps} from 'next';
import {Contact} from '../../types';


//SSR
export const getServerSideProps:GetServerSideProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {contact: data}
    }
}

type ContactProps={
    contact:Contact
}


const Contact = ({contact}:ContactProps) => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <ContactInfo contact={contact}/>
        </>

    );
};

export default Contact;