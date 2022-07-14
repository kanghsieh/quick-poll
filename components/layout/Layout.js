import Navbar from './Navbar';
import styles from './Layout.module.scss';

function Layout(props) {
  <div>
    <Navbar />
    <main className={styles.main}>{props.children}</main>
  </div>
}

export default Layout;
