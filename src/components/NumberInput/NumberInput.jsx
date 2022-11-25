import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { CountriesContext } from '../../context/CountriesContext'

const NumberInput = () => {
    const [inputNumber, setInputNumber] = useState(5)
    const [isOutOfRange, setIsOutOfRange] = useState(false)
    const { setCountries } = useContext(CountriesContext)

    const fetchCoutryName = async () => {
        try {
            const resp = await axios.get('https://random-data-api.com/api/v2/addresses')
            const countryName = resp?.data?.country
            return countryName
        } catch (err) {
            console.log(err)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let countriesList = []
        // fetch as many countires times as user defined
        for (let i = 0; i < inputNumber; i++) {
            countriesList.push(await fetchCoutryName())
        }
        setCountries(countriesList)
    }

    useEffect(() => {
        //number validation
        if (inputNumber > 20 || inputNumber < 5) setIsOutOfRange(true)
        else setIsOutOfRange(false)
    }, [inputNumber])
    return (
        <div className="numberInput">
            <form onSubmit={handleSubmit}>
                <input type="number" value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} />
                <button disabled={isOutOfRange}>GET COUNTRIES</button>
            </form>
        </div>
    )
}

export default NumberInput
