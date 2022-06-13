import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import Next from '../public/image-2.jpg'
import NextTwo from '../public/react.jpg'
import { motion } from "framer-motion"


export default function Home() {


  return (
   <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Разработка высокопроизводительных WEB-приложений" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="phone-title content_bg-1">
          <motion.h1
  animate={{ y: [20, 0], opacity: [0, 1] }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.3}}>Разработка web-приложений</motion.h1>
        </div>

         <div className="cont">
        <div className="wrap-section m-t-1 just-max p-col">
        <div className="image-section">
             <Image
        src={Next}
        alt="Разработка высокопроизводительных WEB-приложений"
        //width={1000} automatically provided
       // height={1300} automaticallyy providedy
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
      </div>
        <div className="content-section">
          <motion.div
           initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
          className="page-title">
          <p>Вы наверное не раз задавались вопросом о том как улучшить скорость загрузки страниц вашего будущего или нынешнего сайта. Ведь при медленной скорости соединения с интернетом страницы долго грузятся, либо не грузятся вообще. А ведь правило трех секунд никто не отменял, согласно многим исследованиям если у пользователя не открывается запрашиваемая им страница в течении первых трех секунд, то велика вероятность того что он просто покинет данный сайт, а ведь это ваш потенциальный клиент.</p>
          <p>К тому же, при ранжировании поисковыми системами релевантных запросу сайтов, большее предпочтение отдается именно тем чья скорость загрузки выше. Помимо этого конечно же учитывается и множество других факторов, но скорость один из важнейших.</p>
           <p>Так что же делать? Как улучшить конверсию и SEO оптимизацию вашего сайта? Спросите Вы...</p>
        </motion.div>
         </div>
         </div>


         <div className="m-t-1 page-title">
           <div className="page-title-wrap">
             <div className="text-right">
          <motion.h2 
          initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.3, type: "tween"}}
  viewport={{ once: true }}
          >Технологии не стоят на месте</motion.h2>
        </div>
        </div>
        </div>

         <div className="wrap-section m-t-1 just-max p-col">
        <div
        className="content-section order-2">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.6, type: "tween"}}
  viewport={{ once: true }}
          className="page-title">
          <p>Next.js - это современный фреймворк, разработанный компаниями Vercel и Google поверх знаменитой библиотеки React.js от компании Meta. К слову говоря, пользовательский интерфейс Instagram полностью выполнен на React.js.</p>
          <p>Но у React.js есть два существенных недостатка. Приложения, разработанные на данной библиотеке не индексируются поисковыми роботами, всвязи с чем плохие показатели SEO-продвижения. Первоначальная загрузка приложения может занять довольно длительное время, что негативно сказывается на юзабилити.</p>
          <p>Next.js решает эти проблемы. Из основного преимущества можно выделить поддержку SSR, так как она позволяет одновременно и повысить производительность, и улучшить позиции сайта в поисковой выдаче. Загрузка приложений происходит значительно быстрее, чем аналогов, разработанных на чистом React.js. Это достигается благодаря встроенному рендерингу на сторону сервера.</p>
        </motion.div>
         </div>
         <div className="image-section order-1">
             <Image
        src={NextTwo}
        alt="Разработка высокопроизводительных WEB-приложений"
        //width={1000} automatically provided
       //height={4032} automaticallyy providedy
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
         </div>
        </div>

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
        </Layout>
    </>
  )
}
