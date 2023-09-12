import { useState } from "react"
import Layout from "../../components/layout"
import Country from "../../components/country"
import Select from "../../components/select"
import { generarId } from "@/utils/helpers"
//import Search from "../../components/search"

export default function Home({ countries }) {

  const [searchCountry, setSearchCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const filteredCountries = countries.filter(( country ) => {
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    const matchesSearch = country.name.common.toLowerCase().includes( searchCountry.toLocaleLowerCase() )
    return matchesRegion && matchesSearch;
  })

  // Our search filter function
  // const searchFilter = ( arrayCountries ) => {
  //   return arrayCountries.filter(
  //     (el) => el.name.common.toLowerCase().includes(queryCountry)
  //   )
  // }

  // const filterByRegion = ( regions ) => {
  //   return regions.filter(
  //     (item) => item.region.includes( selectedRegion )
  //   )
  // }
  
  //Applying our search filter function to our array of countries recieved from the API
  //const filteredCountries = searchFilter( countries )

  // const filteredRegions = filterByRegion( countries )

  const handleSearch = (e) => {
    setSearchCountry(e.target.value)
  }

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value)
  }

  return (
    <>
      <Layout>
        <main className='py-20 px-10 md:px-20 xl:px-36'>
          <section className="grid grid-cols-1 sm:grid-cols-2 mb-5">
            <input type='text' value={ searchCountry } onChange={ handleSearch }  placeholder='Buscar...'/>

            <select
              id="category-select" 
              onChange={ handleRegionChange }
              value={ selectedRegion }
              className='w-52 py-3 px-4 outline-none shadow rounded text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700'
            >
              <option value="">Filtrar por región</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
            { filteredCountries.map( country => (
              <Country 
                key={ generarId() }
                country={ country }
              />
            ))}
          </section>
        </main>
      </Layout>
    </>

  )
}

export async function getStaticProps( ) {
  const response = await fetch(`https://restcountries.com/v3.1/all`)
  // const response = await fetch(`http://localhost:3000/api/countries`)
  const  countries  = await response.json()

  return{
    props:{
      countries
    }
  }
}
