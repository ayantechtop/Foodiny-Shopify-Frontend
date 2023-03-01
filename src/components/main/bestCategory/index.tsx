import React from 'react'

import styles from './index.module.scss'
import Image from 'next/image'

const bestCategoryItems = [
  {
    id: 1,
    src: '/burger-2.png',
    title: 'Chicken Burger',
    backgroundColor: '#b4de77',
  },
  {
    id: 2,
    src: '/pizza.png',
    title: 'Chicken Burger',
    backgroundColor: '#ffcc64',
  },
  {
    id: 3,
    src: '/french-fries-2.png',
    title: 'Chicken Burger',
    backgroundColor: '#d06c7a',
  },
]

const BestCategory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>
          Best <span>Delivered</span> {`\n`} Categories
        </h1>
        <div className={styles.description}>
          Here are some of our best distributed categories. If you want you can
          order from here.
        </div>
      </div>
      <div className={styles.bottom}>
        {bestCategoryItems?.map(({ id, src, title, backgroundColor }) => (
          <div key={id} className={styles.item}>
            <div className={styles.background} style={{ backgroundColor }} />
            <Image src={src} width={200} height={200} alt="" />
            <div className={styles.order_box}>
              <div className={styles.title}>{title}</div>
              <div className={styles.order}>Order Now</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestCategory
