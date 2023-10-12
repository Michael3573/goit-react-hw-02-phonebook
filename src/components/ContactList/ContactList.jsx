import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles['contact-list']}>
    {contacts.map(contact => (
      <li className={styles['phone-book']} key={contact.id}>
        {contact.name}: {contact.number}
        <button
          className={styles['del-btn']}
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
