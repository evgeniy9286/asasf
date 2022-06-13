import ActiveLink from './ActiveLink'
import styles from './footer.module.scss'
import Link from 'next/link'

const Footer = () => {

   return(
      <>
     <style jsx>{`
      .active-link {
      display: none;
    }
} 
    `}</style>
    <div className={styles.footer}>
    <div className="container mx-auto">
       <div className={styles.footerContent}>
    <ul>
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
    <ul>
       <li><a href="https://api.whatsapp.com/send/?phone=79676749784">Watsapp</a></li>
       <li><a href=" https://t.me/+79676749784">Telegram</a></li>
       <li><a href = "viber://chat?number=%2B79676749784">Viber</a></li>
    </ul>
    <ul>
       <li>
         <a href="tel:+79676749784">+7(967)-674-97-84</a>
       </li>
       <li>
         <a href="mailto:evgeniymakhnin@gmail.com">evgeniymakhnin@gmail.com</a>
       </li>
        <li><Link href="./politika"><a>Политика конфиденциальности</a></Link></li>
    </ul>
    </div>
    </div>
    </div>
      </>
   )
}

export default Footer