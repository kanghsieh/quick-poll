import styles from './Navbar.module.scss';

function Navbar(props) {
  return (
    <header className={styles.header}>
      <h1>LOGO</h1>
      <nav className={styles.navbar}>
        <ul className={styles.navlist}>
          <li>Home</li>
          <li>Create new poll</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
