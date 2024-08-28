import React from 'react'
import styles from './element.module.css'
import { motion } from 'framer-motion'

const Element = ({ title, subtitle }) => {
  const textVariants = {
    initial: {
      opacity: 0,
      y: -20
    },
    animate: {
      opacity: 1,
      y: 0
    },
  }

  return (
    <div className='flex justify-center content-center m-10'>
      <motion.div initial="initial" whileHover="animate" transition={{ staggerChildren: 0.05 }}  className={styles.card}>
        <div className={styles.content}>
          <h3 className={styles.cardtitle}>{title}</h3>
          <div className={styles.cardsubtitle}>
            {subtitle.split("").map((char) => {
              return <motion.span key={char.id} style={{ marginRight: char === ' ' ? '0.4rem' : '0.1' }} className='inline-block relative' variants={textVariants}>
                {char}
              </motion.span>
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Element