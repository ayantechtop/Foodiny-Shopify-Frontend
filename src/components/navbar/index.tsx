import React from 'react'
import cx from 'clsx'

import styles from './index.module.scss'

const navbarItems = [
  {
    id: 1,
    content: 'Home',
  },
  {
    id: 2,
    content: 'Offer',
  },
  {
    id: 3,
    content: 'Service',
  },
  {
    id: 4,
    content: 'Menu',
  },
  {
    id: 5,
    content: 'About Us',
  },
]

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>Foodiny</div>
      <ul className={styles.menu}>
        {navbarItems?.map(({ id, content }) => (
          <li
            key={id}
            className={cx(styles.item, { [styles.actived]: id === 1 })}
          >
            {content}
          </li>
        ))}
      </ul>
      <div className={styles.authen}>
        <div className={styles.item}>Login</div>
        <div className={cx(styles.item, styles.sign_up)}>Sign Up</div>
      </div>
    </nav>
  )
}

export default Navbar
