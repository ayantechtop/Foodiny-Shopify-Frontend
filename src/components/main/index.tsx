import React from 'react'

import Hero from './hero'
import RegularMenu from './regularMenu'
import BestCategory from './bestCategory'

import styles from './index.module.scss'

const MainComponent = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <BestCategory />
      <RegularMenu />
    </div>
  )
}

export default MainComponent
