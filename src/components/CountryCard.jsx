import React from 'react'

const CountryCard = ({country}) => {
console.log(country);

  return (
    <div className='card'>
        <div className='img'>
            <img src={country?.flags.svg} alt="" />
        </div>
        <div className='info'>
        <h2>{country?.name.common}</h2>
        <table className='lista-info'>
          <tr>
            <th>Capital</th>
            <th>Poblacion</th>
            <th>Área</th>
            <th>Continente</th>
          </tr>
          <tr>
            <td>{country?.capital}</td>
            <td>{country.population}</td>
            <td>{country?.area}</td>
            <td>{country?.continents}</td>
          </tr>
        </table>
        </div>
    </div>
  )
}

export default CountryCard