import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/card.module.css'

const Country = ({ country }) => {

  const { capital, region, population, name:{common}, flags:{svg, alt}  } = country;

  // const { capital, region, population, name, flags:{svg, alt}, nativeName  } = country;

  return (
    <div className={`${styles.card} text-white rounded-md overflow-hidden shadow-md`}>
      <Link href={`/pais/${ common.toLowerCase() }`}>
        <Image src={ svg } width={300} height={300} alt={common} className='w-full object-cover h-48'/>
        <article className='p-4'>
          <h2 className='text-lg font-extrabold'>{ common}</h2>
          <p><span className='font-semibold'>Población:</span> { population }</p>
          <p><span className='font-semibold'>Región:</span> { region }</p>
          <p><span className='font-semibold'>Capital:</span> { capital }</p>
        </article>
      </Link>
    </div>
  )
}

export default Country