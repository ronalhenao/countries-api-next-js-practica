import React from 'react'
import styles from '@/styles/header.module.css'

const Header = () => {
  return (
    <header className={`${styles.header} grid grid-cols-2 px-4 md:px-20 xl:px-36 py-5 items-center text-white`}>
      <h1 className='font-extrabold text-sm md:text-lg'>Where in the world?</h1>
      <span className='text-right'>Dark Mode</span>
    </header>
  )
}

export default Header