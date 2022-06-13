import Head from 'next/head'
import Layout from '../components/layout'
import { motion } from "framer-motion"
import Form from './form'



export default function Contact() {
  return (
   <>
      <Head>
        <title>Контакты</title>
        <meta name="description" content="Меня зовут Евгений Махнин" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div class="content_bg-4 phone-title">
          <motion.h1
  animate={{ y: [20, 0], opacity: [0, 1] }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.3}}>Заполните форму обратной связи</motion.h1>
        </div>
         <div class="cont">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ease: "easeOut",  duration: 0.6, delay: 0.3, type: "tween"}}
  viewport={{ once: true }}
          class="m-t-1">
          <Form/>
        </motion.div>
        </div>
        </Layout>
    </>
  )
}


