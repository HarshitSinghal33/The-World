import React from 'react';

const renderCurrency = (currency) => {
    if (!currency) {
        return "Undefined"
    }
    const allCurrenices = Object.keys(currency);
    return (
        <>
            {allCurrenices.map(cur => (
                <span key={cur}>
                    <span>{currency[cur].name}</span> (<span>{currency[cur].symbol}</span>)<br />
                </span>
            ))}
        </>
    )
}
const renderBorders = (borders) => {
    return borders === undefined
        ? "Undefined"
        : (<span>
            {borders.map((border, i) => <span key={border}>{`${border}${i !== borders.length - 1 ? ', ' : ''} `}</span>)}
        </span>);
};

const renderLanguages = (languages) => {
    if (!languages || Object.keys(languages).length === 0) {
        return <span>Language not found.</span>;
    }
    const allLanguages = Object.values(languages)
    return allLanguages.map((language, i) => <span key={language}>
        {`${language}${i !== allLanguages.length - 1 ? ', ' : ''}  
        `}
    </span>);
};

const CountryDetail = ({ country }) => {
    return (
        <div className='flex justify-center rounded-xl w-80 m-auto shadow-light p-6 my-6 dark:shadow-dark dark:text-white'>
            <div>
                <div>
                    <img src={country.flags.svg} alt="" className='rounded-lg shadow-light' />
                </div>
                <div className='mt-3'> 
                <span className="title"> Country Name:</span> {country.name.common}</div>
                <div><span className="title">Currency:</span> {renderCurrency(country.currencies)}</div>
                <div> <span className="title"> Population</span>: {country.population}</div>
                <div>
                    <span className="title"> Capital: </span>
                    <span>{country.capital || "Undefined"}</span>
                </div>
                <div><span className="title"> Continent:</span> {country.continents}</div>
                <div><span className="title">Border: </span>{renderBorders(country.borders)}</div>
                <div><span className="title">Languages: </span>{renderLanguages(country.languages)}</div>
                <div>
                    <a href={`${country.maps.googleMaps}`} className='text-blue-900 font-semibold' target='_blank'>See on Google Maps</a>
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;