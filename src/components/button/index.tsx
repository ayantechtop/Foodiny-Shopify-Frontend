import React from 'react'
import cx from 'clsx'
import { motion } from 'framer-motion'

import styles from './index.module.scss'

interface ButtonProps {
  className?: string
  children?: React.ReactNode
}

const Button = ({ className, children }: ButtonProps) => {
  return (
    <motion.div
      tabIndex={0}
      whileHover={{ scale: 1.05 }}
      className={cx(styles.button, className)}
    >
      {children ?? 'Button'}
    </motion.div>
  )
}

export default Button
