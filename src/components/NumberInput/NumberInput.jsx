import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { CountriesContext } from '../../context/CountriesContext'
import './NumberInput.scss'

const NumberInput = () => {
    const [inputNumber, setInputNumber] = useState(5)
    const [isOutOfRange, setIsOutOfRange] = useState(false)
    const { setCountries, setIsLoading } = useContext(CountriesContext)

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
        setIsLoading(true)
        let countriesList = []
        // fetch as many countires times as user defined
        for (let i = 0; i < inputNumber; i++) {
            let randomCountry = await fetchCoutryName()
            //prevent repeated countries
            while (countriesList.includes(randomCountry)) {
                randomCountry = await fetchCoutryName()
            }
            countriesList.push(randomCountry)
        }
        setCountries(countriesList)
    }

    useEffect(() => {
        //number validation
        if (inputNumber > 20 || inputNumber < 5 || !Number.isInteger(inputNumber)) setIsOutOfRange(true)
        else setIsOutOfRange(false)
    }, [inputNumber])
    return (
        <div className="numberInput">
            <form onSubmit={handleSubmit}>
                <input type="number" value={inputNumber} onChange={(e) => setInputNumber(+e.target.value)} />
                <button disabled={isOutOfRange} className={isOutOfRange ? 'disabled' : ''}>
                    GET COUNTRIES
                </button>
            </form>
            {isOutOfRange && <p>Input value should be inteager number in range 5..20</p>}
        </div>
    )
}

export default NumberInput
