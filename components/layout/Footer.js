import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footerBox}>
      <div className={styles.footer}>
        <div>
          <p>Made with &ensp;
            <a href="https://nextjs.org/">
              <i className="devicon-nextjs-original"></i>
            </a>
          </p>
        </div>
        <p>|</p>
        <div>
          <p>© 2022 Kang Hsieh</p>
        </div>
        <p>|</p>
        <div>
          <p>
            <a href="https://github.com/kanghsieh">
              <i className="devicon-github-original"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
