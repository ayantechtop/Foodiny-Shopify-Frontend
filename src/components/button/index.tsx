import React from 'react'
import cx from 'clsx'

import styles from './index.module.scss'

interface ButtonProps {
  className?: string
  children?: React.ReactNode
}

const Button = ({ className, children }: ButtonProps) => {
  return (
    <div tabIndex={0} className={cx(styles.button, className)}>
      {children ?? 'Button'}
    </div>
  )
}

export default Button
