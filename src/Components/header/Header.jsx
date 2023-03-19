import React from 'react';
import logo from '../../Images/Questify.png'
import styles from './Header.module.scss'


function Header() {
  return (
    <div className={styles.header__container}>
      <img className={styles.header__logo} src={logo} alt="Logotype"/>
    </div>
  )
}

export default Header