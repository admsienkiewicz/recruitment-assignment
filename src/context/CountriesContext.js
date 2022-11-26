import { createContext, useState } from 'react'

export const CountriesContext = createContext()

export const CountriesContextProvider = ({ children }) => {
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    return (
        <CountriesContext.Provider value={{ countries, setCountries, isLoading, setIsLoading }}>
            {children}
        </CountriesContext.Provider>
    )
}
