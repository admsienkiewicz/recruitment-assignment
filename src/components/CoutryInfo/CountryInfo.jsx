import React from 'react'
import './CountryInfo.scss'
import { MdLocationCity } from 'react-icons/md'
import { BsPeopleFill } from 'react-icons/bs'
import { HiLanguage } from 'react-icons/hi2'
import ReactTooltip from 'react-tooltip'

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
                            <p data-tip="Capital City">
                                <MdLocationCity className="icon" />
                            </p>
                            <ReactTooltip />
                            <p>{capital ? capital[0] : 'No information found!'}</p>
                        </div>
                        <div className="country-info__details--languages">
                            <p data-tip="Official languages">
                                <HiLanguage className="icon" />
                            </p>
                            <ReactTooltip />
                            <div>
                                {Object.values(languages).map((lang, id) => (
                                    <p>{lang}</p>
                                ))}
                            </div>
                        </div>
                        <div className="country-info__details--population">
                            <p data-tip="Population">
                                <BsPeopleFill className="icon" />
                            </p>
                            <ReactTooltip />
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
