import './App.css'
import CountriesList from './components/CoutriesList/CountriesList'
import Header from './components/Header/Header'
import NumberInput from './components/NumberInput/NumberInput'
import { CountriesContextProvider } from './context/CountriesContext'

function App() {
    return (
        <div className="App">
            <Header />
            <CountriesContextProvider>
                <NumberInput />
                <CountriesList />
            </CountriesContextProvider>
        </div>
    )
}

export default App
