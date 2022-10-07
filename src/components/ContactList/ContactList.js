import React from 'react';
import css from './ContactList.module.css'


const ContactList = ({contacts}) =>{
  return(
  <ul className={css.contactList}>
    <li>Poly Molly</li>
  </ul>
)
}


export default ContactList;
