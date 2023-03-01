import React from 'react'

import { navbarItems } from '../navbar'

import styles from './index.module.scss'

const informationItems = [
  {
    id: 1,
    content: 'Menu',
  },
  {
    id: 2,
    content: 'Quality',
  },
  {
    id: 3,
    content: 'Make a Choice',
  },
  {
    id: 4,
    content: 'Salad With Vegetable',
  },
  {
    id: 5,
    content: 'Fast Delivery',
  },
  {
    id: 6,
    content: 'Subscribe',
  },
]

const contactItems = [
  {
    id: 1,
    content: '+123 456 789',
  },
  {
    id: 2,
    content: 'Explore',
  },
  {
    id: 3,
    content: 'info@foodiny.com',
  },
  {
    id: 4,
    content: '1234, Bangkok, Thailand',
  },
]

const Footer = () => {
  return (
    <footer className={styles.outer_container}>
      <div className={styles.container}>
        <div className={styles.title}>Foodiny</div>
        <FooterItem title="Menu" items={navbarItems} />
        <FooterItem title="Information" items={informationItems} />
        <FooterItem title="Contact" items={contactItems} />
      </div>
    </footer>
  )
}

const FooterItem = ({
  title,
  items,
}: {
  title: string
  items: { id: number; content: string }[]
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>{title}</div>
      <ul className={styles.menu}>
        {items?.map(({ id, content }) => (
          <li key={id} className={styles.list_item}>
            {content}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
