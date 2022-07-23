import styles from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navlist}>
          <Link href="/">
            <li className={styles.logo}>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
                quickPOLL
            </li>
          </Link>
          {/* <li><Link href={"/"}>Home</Link></li> */}
          <li><Link href={"/polls/new-poll"}>Create new poll</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
