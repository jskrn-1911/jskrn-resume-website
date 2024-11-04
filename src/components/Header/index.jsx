import React from 'react';
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className={styles.container}>
      <div className={styles.nameSection}>
        <Link href='/'>JSKRN S.</Link>
      </div>
      <div className={styles.navigationSection}>
        <div>
          <Link href='/'><h1 className={pathname === '/' ? styles.activeLink : styles.Link}>HOME</h1></Link>
        </div>
        <div>
          <Link href='/about'><h1 className={pathname === '/about' ? styles.activeLink : styles.Link}>ABOUT</h1></Link>
        </div>
        <div>
          <Link href='/work'><h1 className={pathname === '/work' ? styles.activeLink : styles.Link}>WORK</h1></Link>
        </div>
        <div>
          <Link href='/contact'><h1 className={pathname === '/contact' ? styles.activeLink : styles.Link}>CONTACT</h1></Link>
        </div>
      </div>
    </div>
  )
}
