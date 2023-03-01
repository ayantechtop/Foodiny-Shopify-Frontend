import React from 'react'
import Image from 'next/image'
import { Variants, motion } from 'framer-motion'

import styles from './index.module.scss'

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

const imageMotionVariant: Variants = {
  offscreen: {
    y: 80,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      bounce: 0.6,
      duration: 1.4,
      type: 'spring',
    },
  },
}

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
          <motion.div
            key={id}
            initial="offscreen"
            whileInView="onscreen"
            className={styles.item}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className={styles.background} style={{ backgroundColor }} />
            <motion.div variants={imageMotionVariant}>
              <Image src={src} width={200} height={200} alt="" />
            </motion.div>
            <div className={styles.order_box}>
              <div className={styles.title}>{title}</div>
              <div className={styles.order}>Order Now</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default BestCategory
