import React from 'react'
import Image from 'next/image'

import styles from './index.module.scss'

const bannerItems = [
  {
    id: 1,
    title: 'Fast Delivery',
    iconSrc: '/deadline.png',
    description:
      'The food will be delivered to your home within 1-2 hours of your ordering.',
  },
  {
    id: 2,
    title: 'Fresh Food',
    iconSrc: '/repeat.png',
    description:
      'Your food will be delivered 100% fresh to your home. we do not deliver stale food',
  },
  {
    id: 3,
    title: 'Free Delivery',
    iconSrc: '/free-delivery.png',
    description:
      'Your food delivery is absolutely free. no cost hust order and enjoy.',
  },
]

const MainComponent = () => {
  return (
    <div className={styles.outer_container}>
      <div className={styles.container}>
        <div className={styles.title_box}>
          <h1 className={styles.title}>
            {`All Fast Food is \n Available at Foodiny`}
          </h1>
        </div>
        <div className={styles.image_container}>
          <div className={styles.image_1}>
            <Image priority alt="" width={250} height={250} src="/burger.png" />
          </div>
          <div className={styles.image_2}>
            <Image priority alt="" width={200} height={200} src="/french-fries.png" />
          </div>
          <div className={styles.shadow} />
        </div>
        <div tabIndex={0} className={styles.button}>
          Buy Now
        </div>
        <ul className={styles.banner_container}>
          {bannerItems?.map(({ id, title, iconSrc, description }) => (
            <li key={id} className={styles.item}>
              <div className={styles.icon}>
                <Image
                  alt=""
                  src={iconSrc}
                  width={id !== 2 ? 30 : 20}
                  height={id !== 2 ? 30 : 20}
                />
              </div>
              <div>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MainComponent
