
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Head from 'next/head';
import MainLayout from '@/Components/mainLayout';


export default function Home() {

  return (
    <> 
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"/>  
        <title>Frontend Mentor | E-commerce product page</title>
      </Head> 
      <MainLayout/>
    </>
  )
}


