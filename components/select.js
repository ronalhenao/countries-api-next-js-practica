import React, { useState } from 'react'

const Select = ({ filterRegion }) => {

  const [region, setRegion] = useState('');

  const handleRegion = (e) => {

    setRegion(e.target.value)
    filterRegion(e.target.value)
  }

  return (
    <>
      <select 
        onChange={ handleRegion }
        value={ region }
        className='w-52 py-3 px-4 outline-none shadow rounded text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700'
      >
        <option>Filtrar por región</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      { region }
    </>
  )
}

export default Select