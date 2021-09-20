import React from 'react';
import './Country.css'
const Country = (props) => {
    const{name,flag,capital,population,region} = props.country;
    return (
        <div className="country">
            <h4>This is: {name}</h4>
            <img src={flag} alt="" />
            <p>Region: {region}</p>
            <p>Capital is: {capital} 
            Population:{population}</p>
        </div>
    );
};

export default Country;