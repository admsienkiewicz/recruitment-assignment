import React from 'react'
import './CountryInfo.scss'
import { MdLocationCity } from 'react-icons/md'
import { BsPeopleFill } from 'react-icons/bs'
import { HiLanguage } from 'react-icons/hi2'

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
                        <div className="country-info__details--capital">
                            <MdLocationCity />
                            <p>{capital ? capital[0] : 'No information found!'}</p>
                        </div>
                        <div className="country-info__details--languages">
                            <HiLanguage />
                            <div>
                                {Object.values(languages).map((lang, id) => (
                                    <p>{lang}</p>
                                ))}
                            </div>
                        </div>
                        <div className="country-info__details--population">
                            <BsPeopleFill />
                            <p>{population ? population : 'No information found!'}</p>
                        </div>
                    </div>
                </>
            ) : (
                <h3>{countryDetailsInfo}</h3>
            )}
        </div>
    )
}

export default CountryInfo
