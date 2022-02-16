import React from 'react';
import Head from "next/head";
import Heading from "../../components/Heading";
import ContactInfo from "../../components/ContactInfo";


//SSR
export const getServerSideProps = async (context) => {
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


const Contact = ({contact}) => {
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