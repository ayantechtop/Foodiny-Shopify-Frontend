import React from 'react'

import Hero from './hero'
import BestCategory from './bestCategory'

import styles from './index.module.scss'

const MainComponent = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <BestCategory />
    </div>
  )
}

export default MainComponent
