import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import Next from '../public/shark.jpg'
import { motion } from "framer-motion"

export default function About() {



  return (
   <>
      <Head>
        <title>Обо мне</title>
        <meta name="description" content="Меня зовут Евгений Махнин" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <div class="content_bg-2 phone-title">
          <motion.h1 
  animate={{ y: [20, 0], opacity: [0, 1] }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.3}}>Раскажу немного о себе</motion.h1>
        </div>

         <div class="cont">

          <div class="wrap-section m-t-1 just-max p-col">
        <div class="image-section">
             <Image
        src={Next}
        alt="Махнин Евгений"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
         </div>
        <div
        class="content-section">
          <motion.div
           initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
          class="page-title">
          <p>Меня зовут Евгений Махнин. Мне 40 лет, проживаю в городе Калининград.</p>
          <p>Я работал WEB-разработчиком в различных компаниях, а также вел свой проект, новостной портал на спортивную тематику, который по ряду высокочастотных запросов входил в ТОП-3 поисковой системы Яндекс.</p>
           <p>Из имеющегося у меня опыта WEB-разработки и SEO-продвижения могу с увереностью сказать что для успешного продвижения интернет ресурса в сети и хороших показателей конверсии необходимо учесть много факторов. Основные из которых это SEO оптимизированая структура сайта, соблюдение правил написания мета-тегов, высокие показатели загрузки страниц на клиент, уникальность контента, ссылочная масса с других ресурсов. Ну и конечно же дизайн, пользователь должен получить всю нужную для него информацию, особо не напрягаясь.</p>
        </motion.div>
         </div>
        </div>

        <motion.div
         initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
        class = "wrap-section m-t-1 just-max p-col">
          <div class="content-section top">
         <div class="page-title">
          <h2>Стиль минимализм</h2>
        </div>
        </div>
         <div
          initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y:0 }}
  transition={{ease: "easeOut",  duration: 1, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
        class="content-section">
         <div class="page-title">
             <p>Почему в WEB-дизайне я предпочитаю стиль минимализм и Вам рекомендую?</p>
             <p>Именно стиль минимализм соответствует современным реалиям юзабилити. Вспомните сами, когда Вы заходите на интернет ресурс переполненный различным текстом, изображениями и иконками... Много ли информации Вы получите, особо не вчитываясь? Уверен что нет. Локаничный стиль минимализма в WEB-дизайне и расчитан именно на то чтобы пользователь сразу же, особо не вникая в контент получил то что ему нужно.</p>
           </div>
         </div>

        </motion.div>


        <motion.div
         initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
        class = "wrap-section m-t-1 just-max p-col">
          <div class="content-section top">
         <div class="page-title">
          <h2>Сервер сайт рендеринг</h2>
        </div>
        </div>
         <div
          initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y:0 }}
  transition={{ease: "easeOut",  duration: 1, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
        class="content-section">
         <div class="page-title">
             <p>Почему в WEB-разработке я использую именно Next.js?</p>
             <p>По моему мнению, именно этот фреймворк отвечает современным требованиям WEB-разработки. Вспомните, сколько раз Вы сами покидали интернет ресурс из-за долгой загрузки страницы? Next.js минимизирует данную проблему, используя современные методы и технологии, полученные из многолетнего опыта таких гигантов IT-индустрии как Vercel, Meta и Google. По итогу мы получаем быстрое, SEO-оптимизированное WEB-приложение.</p>
           </div>
         </div>

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
