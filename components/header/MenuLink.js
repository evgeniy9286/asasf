
import ActiveLink from './ActiveLink'
import styles from './menu.module.scss'



const MenuLink = ({active, setActive}) => {


   return(
      <>
     <style jsx>{`
   .active-link::after {
    background-color: #000000;
    display: block;
    content: "";
    height: 3px;
    margin-top: 10px;
    width: 100%;
}  
    `}</style>
      <div className={active? 'menu active' : 'menu'} onClick={() => setActive(false)}>
        <div className={styles.blur}/>
         <div className={styles.menuContent} onClick={e=>e.stopPropagation()}>
    <ul className={styles.headerLinks}>
      <li>
        <ActiveLink activeClassName="active-link" href="/">
          <a className="nav-link">Главная</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active-link" href="/about">
          <a className="nav-link">Обо мне</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active-link" href="/price">
          <a className="nav-link">Прайс-лист</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active-link" href="/contact">
          <a className="nav-link">Контакты</a>
        </ActiveLink>
      </li>
    </ul>
    <ul className = {styles.headerFooter}>
      <li>
           <a href="tel:+79676749784">+7(967)-674-97-84</a>
      </li>
      <li className={styles.dividingLine}></li>
      <li><a href="mailto:evgeniymakhnin@gmail.com">evgeniymakhnin@gmail.com</a></li>
    </ul>
         </div>
      </div>
      </>
   )
}

export default MenuLink