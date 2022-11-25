import React from 'react'

const CountryInfo = ({ countryDetailsInfo }) => {
    const { capital, name, flag, languages, population } = countryDetailsInfo
    return (
        <div className="country-info">
            {name ? (
                <>
                    <h3 className="country-info__name">
                        {flag} {name.official}
                    </h3>
                    <div className="country-info__details">
                        <div className="country-info__details--capital">{capital[0]}</div>
                        <div className="country-info__details--languages">
                            Languages:
                            {Object.values(languages).map((lang, id) => (
                                <li>{lang}</li>
                            ))}
                        </div>
                        <div className="country-info__details--population">Population: {population}</div>
                    </div>
                </>
            ) : (
                <h3>{countryDetailsInfo}</h3>
            )}
        </div>
    )
}

export default CountryInfo
