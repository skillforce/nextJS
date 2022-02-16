import React from 'react';
import s from '../styles/ContactInfo.module.scss'
import Heading from "./Heading";
import {Contact} from '../types';

const {userForm, userPhoto, userInfo, commonInfo, addressInfo} = s;

type ContactInfoProps ={
    contact:Contact
}

const ContactInfo = ({contact}:ContactInfoProps) => {

    if (!contact) {
        return <Heading tag={'h3'} text={'empty contact'}/>
    }
    const {name, email, address} = contact || {}
    const {street, suite, city, zipcode} = address || {}

    return (
        <div className={userForm}>
            <div className={userPhoto}>
                200x500
            </div>
            <div className={userInfo}>
                <div className={commonInfo}>
                    Name: {name}
                    Email: {email}
                </div>
                <div className={addressInfo}>
                    Address : {suite},
                     {street}  st.,
                    {city} ,
                    {zipcode}
                </div>
            </div>

        </div>
    );
};

export default ContactInfo;