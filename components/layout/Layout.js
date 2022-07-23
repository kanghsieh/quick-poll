import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './Footer';
import { Fragment } from 'react';
import styles from './Layout.module.scss';

function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quick Poll</title>
        <meta name="description" content="Generate a quick poll with friends" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
      <Navbar />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout;
