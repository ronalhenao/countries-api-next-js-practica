import React from 'react'
import Layout from "../../../components/layout"
import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/detail.module.css'

const CountryDetail = ({ data }) => {

  console.log(data)

  const {
    borders,
    languages,
    currencies,
    population,
    tld, 
    region, 
    subregion, 
    capital, 
    name:{ 
      common, 
      official
    },
    flags:{svg, alt}
  } = data[0]

  // const {
  //   borders,
  //   languages,
  //   currencies,
  //   population,
  //   tld, 
  //   region, 
  //   subregion, 
  //   capital, 
  //   name,
  //   flags:{svg, alt}
  // } = data[0]

  const language = Object.values(languages);
  // console.log(currencies)

  return (
    // grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 py-20 px-10 md:px-20 xl:px-36
    <Layout>
      <main className='pt-12 pb-20 px-5 md:px-20 xl:px-36'>
        <Link href={'/'} className={`${ styles.link } text-white border border-neutral-800 rounded py-1 px-6 shadow-lg mb-12 inline-block`}>Back</Link>
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 xl:gap-x-28 items-center'>
          <Image src={ svg } width={400} height={400} alt={common} className='w-full h-60 md:h-96 xl:h-115 object-cover mb-6 lg:mb-0' />
          <article className='text-white'>
            <h2 className='text-2xl font-extrabold mb-8'>{ common }</h2>
            <ul className='columns-1 md:columns-2 mb-10'>
              <li className='mb-2'><strong>Nombre de origen:</strong> { official }</li> 
              <li className='mb-2'><strong>Población:</strong> { population }</li>
              <li className='mb-2'><strong>Región:</strong> { region }</li>
              <li className='mb-2'><strong>Subregión:</strong> { subregion }</li>
              <li className='mb-2'><strong>Capital:</strong> { capital }</li>
              <li className='mb-2'><strong>Dominio internacional:</strong> { tld }</li>

              <li className='mb-2 flex flex-wrap'>
                <p className='font-extrabold'>Idiomas:</p>
                <ul className='flex flex-wrap items-center'>
                  { language?.map((item,i) => (
                    <li key={i} className='mx-1'>{ item }</li>
                  ))}
                </ul>
              </li>

            </ul>
            <div className='flex flex-wrap last:items-center'>
              <p className='font-extrabold flex-initial w-32'>Países fronterizos:</p>
              <ul className='flex items-center flex-auto w-64 flex-wrap gap-1'>
                { borders?.map((item, i) => (
                  <li key={i} className={`${ styles.tags } border border-neutral-800 rounded py-1 px-6 shadow-lg`}>{ item }</li>
                ))}
              </ul>
            </div>
          </article>
        </section>

      </main>
    </Layout>
  )
}

export const getServerSideProps = async ({ query: { url } }) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${url}`)
  // const response = await fetch(`http://localhost:3000/api/countries/${url}`)
  const data = await response.json()

  return{
    props:{
      data
    }
  }
}

export default CountryDetail