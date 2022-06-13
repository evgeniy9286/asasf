import React from 'react';
import MenuLink from './MenuLink';
import { useState } from 'react';
import styles from './menu.module.scss'
import { Rotate as Hamburger } from 'hamburger-react'


const Menu = () => {
const[menuActive, setMenuActive] = useState(false);

  return (
    <>
                    <div className={styles.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
                      <Hamburger duration={0.5} toggled={menuActive} toggle={setMenuActive}/>
                    </div>
      <MenuLink active = {menuActive} setActive = {setMenuActive} />
    </>
  )
}

export default Menu