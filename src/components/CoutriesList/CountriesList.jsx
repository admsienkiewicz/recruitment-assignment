import React, { useContext } from 'react'
import { CountriesContext } from '../../context/CountriesContext'

const CountriesList = () => {
    const { countries } = useContext(CountriesContext)
    return (
        <div>
            {countries.map((country, id) => (
                <li key={id}>{country}</li>
            ))}
        </div>
    )
}

export default CountriesList
