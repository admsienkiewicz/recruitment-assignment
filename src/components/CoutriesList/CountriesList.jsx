import React, { useContext, useEffect, useState } from 'react'
import { CountriesContext } from '../../context/CountriesContext'
import axios from 'axios'
import CountryInfo from '../CoutryInfo/CountryInfo'
import './CountriesList.scss'
import ReactLoading from 'react-loading'

const CountriesList = () => {
    const { countries, isLoading, setIsLoading } = useContext(CountriesContext)
    const [countriesDetails, setCountriesDetails] = useState([])

    const fetchDetails = async (countryName) => {
        try {
            const resp = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            const details = resp?.data[0]
            return details
        } catch (err) {
            console.log(err)
            return `No information found! (${countryName})`
        }
    }
    useEffect(() => {
        async function getDetailsArray() {
            let detailsArray = []
            for (let countryName of countries) {
                detailsArray.push(await fetchDetails(countryName))
            }
            // sort by population
            const sorted = detailsArray.sort((a, b) => (!!a.population ? b.population - a.population : true))
            setCountriesDetails(sorted)
            setIsLoading(false)
        }
        getDetailsArray()
    }, [countries])
    return (
        <div className="coutries-list">
            {isLoading ? (
                <ReactLoading type="spin" color="#fff" className="loading"></ReactLoading>
            ) : (
                <>
                    {countries.length > 0 && (
                        <p>Your random countries are: {countries.toString().replaceAll(',', ', ')}</p>
                    )}
                    {countriesDetails.map((countryDetailInfo, id) => (
                        <CountryInfo key={id} countryDetailsInfo={countryDetailInfo} />
                    ))}
                </>
            )}
        </div>
    )
}

export default CountriesList
