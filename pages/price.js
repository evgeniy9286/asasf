import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

export default function Price() {
  return (
   <>
      <Head>
        <title>Прайс-лист</title>
        <meta name="description" content="Меня зовут Евгений Махнин" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
       <div class="content_bg-3 phone-title">
          <motion.h1
  animate={{ y: [20, 0], opacity: [0, 1] }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.3}}>Прайс-лист моих услуг</motion.h1>
        </div>
         <div class="cont">
           
           <motion.div
           initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }} class="price m-t-1"
           >
           <p>Стоимость разработки WEB-приложения начинается от <span>30 000 ₽</span>. В эту стоимость входит адаптивная верстка (под декстоп, планшет и телефон),
           ваш дизайн либо предложенный мной (с мелкими правками), SEO-оптимизация структуры WEB-приложения, наполнение от 1 до 5 страниц, размещение на бесплатном хостинге от компании Vercel (разработчика фреймворка Next.js), консультация по вопросам дальнейшего ведения и продвижения в сети интернет. О дополнительных услугах ниже.</p>
           
           <ul>
             <li class="price-section just-col">
               <div class="li-before"/>
               <div class="just-max">
            <div class="price-section-title">
          <p>Индивидуальный дизайн</p>
          </div>
          <div class="price-section-subtitle just-right">
             <p>30 000 ₽</p>
          </div>
          </div>
        </li>


        <li class="price-section just-col">
               <div class="li-before"/>
               <div class="just-max">
            <div class="price-section-title">
          <p>Анимация элементов WEB-приложения</p>
          </div>
          <div class="price-section-subtitle just-right">
             <p>10 000 ₽</p>
          </div>
          </div>
        </li>

         <li class="price-section just-col">
               <div class="li-before"/>
               <div class="just-max">
            <div class="price-section-title">
          <p>Дополнительная верстка страниц</p>
          </div>
          <div class="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

         <li class="price-section just-col">
               <div class="li-before"/>
               <div class="just-max">
            <div class="price-section-title">
          <p>Слайд-шоу</p>
          </div>
          <div class="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

        <li class="price-section just-col">
               <div class="li-before"/>
               <div class="just-max">
            <div class="price-section-title">
          <p>Аккордеон</p>
          </div>
          <div class="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

        <li class="price-section just-col">
               <div class="li-before"/>
               <div class="just-max">
            <div class="price-section-title">
          <p>Фотогалерея</p>
          </div>
          <div class="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

        <li class="price-section just-col">
               <div class="li-before"/>
               <div class="just-max">
            <div class="price-section-title">
          <p>Модальное окно</p>
          </div>
          <div class="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

        <li class="price-section just-col">
               <div class="li-before"/>
               <div class="just-max">
            <div class="price-section-title">
          <p>Форма обратной связи</p>
          </div>
          <div class="price-section-subtitle just-right">
             <p>3000 ₽</p>
          </div>
          </div>
        </li>

         <li class="price-section just-col">
               <div class="li-before"/>
               <div class="just-max">
            <div class="price-section-title">
          <p>Схема проезда</p>
          </div>
          <div class="price-section-subtitle just-right">
             <p>1500 ₽</p>
          </div>
          </div>
        </li>

       <li class="price-section just-col">
               <div class="li-before"/>
               <div class="just-max">
            <div class="price-section-title">
          <p>Счетчик посещаемости</p>
          </div>
          <div class="price-section-subtitle just-right">
             <p>1500 ₽</p>
          </div>
          </div>
        </li>

        <li class="price-section just-col">
               <div class="li-before"/>
               <div class="just-max">
            <div class="price-section-title">
          <p>Виджеты социальных сетей</p>
          </div>
          <div class="price-section-subtitle just-right">
             <p>1500 ₽</p>
          </div>
          </div>
        </li>

         <li class="price-section just-col">
               <div class="li-before"/>
               <div class="just-max">
            <div class="price-section-title">
          <p>Виджеты мессенджеров</p>
          </div>
          <div class="price-section-subtitle just-right">
             <p>1500 ₽</p>
          </div>
          </div>
        </li>

        <li class="price-section just-col">
               <div class="li-before"/>
               <div class="just-max">
            <div class="price-section-title">
          <p>Аудио/видео плеер</p>
          </div>
          <div class="price-section-subtitle just-right">
             <p>1500 ₽</p>
          </div>
          </div>
        </li>

        <li class="price-section just-col">
               <div class="li-before"/>
               <div class="just-max">
            <div class="price-section-title">
          <p>Мелкие правки в дальнейшем</p>
          </div>
          <div class="price-section-subtitle just-right">
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
        class = "link-form m-t-1">
          <div
          class="page-title">
            <p>Заинтересовало мое предложение? Свяжитесь со мной по указанным ниже контактам, либо <Link href="/contact"><a class="linf-form">заполните форму</a></Link> обратной связи и я обязательно свяжусь с Вами для уточнения деталей.</p>
          </div>
        </motion.div>

        </div>
        </Layout>
    </>
  )
}
