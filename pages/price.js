import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion"
import Menu from "../components/header/Menu"
import Footer from '../components/footer/Footer'

export default function Price() {
  return (
   <>
      <Head>
        <title>Прайс-лист</title>
        <meta name="description" content="Прайс-лист моих услуг. Стоимость разработки WEB-приложения начинается от 30 000 ₽." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
       <div className="content_bg-3 phone-title">
          <motion.h1
  animate={{ y: [20, 0], opacity: [0, 1] }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.3}}>Прайс-лист моих услуг</motion.h1>
        </div>
         <div className="cont">
           
           <motion.div
           initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }} className="price m-t-1"
           >
           <p>Стоимость разработки WEB-приложения начинается от <span>30 000 ₽</span>. В эту стоимость входит адаптивная верстка (под декстоп, планшет и телефон),
           ваш дизайн либо предложенный мной (с мелкими правками), SEO-оптимизация структуры WEB-приложения, наполнение от 1 до 5 страниц, интеграция с HeadlesCMS Sanity.io (система управления WEB-приложением), размещение на бесплатном хостинге от компании Vercel (разработчика фреймворка Next.js), консультация по вопросам дальнейшего ведения и продвижения в сети интернет. Сроки обговариваются индивидуально. О дополнительных услугах ниже.</p>
           
           <ul>
             <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Индивидуальный дизайн</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>30 000 ₽</p>
          </div>
          </div>
        </li>


        <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Анимация элементов WEB-приложения</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>10 000 ₽</p>
          </div>
          </div>
        </li>

         <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Создание динамических страниц</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>5000 ₽</p>
          </div>
          </div>
        </li>

         <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Верстка дополнительных страниц</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

         <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Слайд-шоу</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

        <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Аккордеон</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

        <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Фотогалерея</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

        <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Модальное окно</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

        <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Форма обратной связи</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

         <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Схема проезда</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>1500 ₽</p>
          </div>
          </div>
        </li>

       <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Счетчик посещаемости</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>1500 ₽</p>
          </div>
          </div>
        </li>

        
        </ul>
        </motion.div>
           

        


          <motion.div
           initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
        className = "link-form m-t-1">
          <div
          className="page-title">
            <p>Заинтересовало мое предложение? Свяжитесь со мной по указанным ниже контактам, либо <Link href="/contact"><a className="linf-form">заполните форму</a></Link> обратной связи и я обязательно свяжусь с Вами для уточнения деталей.</p>
          </div>
        </motion.div>

        </div>
        <Footer/>
    </>
  )
}export default function Price() {
  return (
   <>
      <Head>
        <title>Прайс-лист</title>
        <meta name="description" content="Прайс-лист моих услуг. Стоимость разработки WEB-приложения начинается от 30 000 ₽." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
       <div className="content_bg-3 phone-title">
          <motion.h1
  animate={{ y: [20, 0], opacity: [0, 1] }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.3}}>Прайс-лист моих услуг</motion.h1>
        </div>
         <div className="cont">
           
           <motion.div
           initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }} className="price m-t-1"
           >
           <p>Стоимость разработки WEB-приложения начинается от <span>30 000 ₽</span>. В эту стоимость входит адаптивная верстка (под декстоп, планшет и телефон),
           ваш дизайн либо предложенный мной (с мелкими правками), SEO-оптимизация структуры WEB-приложения, наполнение от 1 до 5 страниц, интеграция с HeadlesCMS Sanity.io (система управления WEB-приложением), размещение на бесплатном хостинге от компании Vercel (разработчика фреймворка Next.js), консультация по вопросам дальнейшего ведения и продвижения в сети интернет. Сроки обговариваются индивидуально. О дополнительных услугах ниже.</p>
           
           <ul>
             <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Индивидуальный дизайн</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>30 000 ₽</p>
          </div>
          </div>
        </li>


        <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Анимация элементов WEB-приложения</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>10 000 ₽</p>
          </div>
          </div>
        </li>

         <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Создание динамических страниц</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>5000 ₽</p>
          </div>
          </div>
        </li>

         <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Верстка дополнительных страниц</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

         <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Слайд-шоу</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

        <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Аккордеон</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

        <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Фотогалерея</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

        <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Модальное окно</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

        <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Форма обратной связи</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

         <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Схема проезда</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>1500 ₽</p>
          </div>
          </div>
        </li>

       <li className="price-section just-col">
               <div className="li-before"/>
               <div className="just-max">
            <div className="price-section-title">
          <p>Счетчик посещаемости</p>
          </div>
          <div className="price-section-subtitle just-right">
             <p>1500 ₽</p>
          </div>
          </div>
        </li>

        
        </ul>
        </motion.div>
           

        


          <motion.div
           initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
        className = "link-form m-t-1">
          <div
          className="page-title">
            <p>Заинтересовало мое предложение? Свяжитесь со мной по указанным ниже контактам, либо <Link href="/contact"><a className="linf-form">заполните форму</a></Link> обратной связи и я обязательно свяжусь с Вами для уточнения деталей.</p>
          </div>
        </motion.div>

        </div>
        <Footer/>
    </>
  )
}
