import React from 'react'
import useSWR from 'swr'
import Image from 'next/image'

import Button from 'src/components/button'

import type { RegularMenuItem } from 'src/types/regularModel'

import styles from './index.module.scss'

const RegularMenuItems = () => {
  const { data, error, isLoading } = useSWR<RegularMenuItem[]>(
    '/api/regular',
    (url) => fetch(url).then((res) => res.json())
  )

  if (isLoading)
    return <div className={styles.loading_container}>Loading . . .</div>
  if (error)
    return <div className={styles.loading_container}>Something error</div>

  return (
    <div className={styles.menu_container}>
      {data?.map(({ id, src, name, price, rating }) => (
        <div key={id} className={styles.card}>
          <div className={styles.name}>{name}</div>
          <div className={styles.star} data-rating={rating} />
          <div className={styles.price}>
            <span>${price}</span>
            <Button className={styles.button}>Buy Now</Button>
          </div>
          <div className={styles.image}>
            <Image src={src} width={110} height={110} alt="" />
          </div>
        </div>
      ))}
    </div>
  )
}

const RegularMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Our <span>Regular</span> Menu
      </div>
      <div className={styles.description}>
        <span>
          These are out regular menus. You can order anything you like.
        </span>
        <Button>See All</Button>
      </div>
      <RegularMenuItems />
    </div>
  )
}

export default RegularMenu
