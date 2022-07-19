import Navbar from './Navbar';
import Head from 'next/head';
import { Fragment } from 'react';
import styles from './Layout.module.scss';

function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quick Poll</title>
        <meta name="description" content="Generate a quick poll with friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{props.children}</main>
    </div>
  )
}

export default Layout;
