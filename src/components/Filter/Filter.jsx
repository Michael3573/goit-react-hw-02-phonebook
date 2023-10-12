import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <input
    className={styles['serch']}
    type="text"
    placeholder="Search by name"
    value={value}
    onChange={onChange}
  />
);

export default Filter;
