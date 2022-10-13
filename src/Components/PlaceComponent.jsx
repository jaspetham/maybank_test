import React from "react";

const PlaceComponent =  (props) =>{
    const { 
        accuracy, 
        continent, 
        continent_gid, 
        country, 
        country_a, 
        country_code, 
        country_gid,
        county,
        county_a,
        county_gid,
        gid,
        label,
        layer,
        name,
        region,
        region_a,
        region_gid,
        source,
        source_id
    } = props;

    return(
        <div>
            <h1>Country Name : {name}</h1>
            <h1>Continent : {continent}</h1>
            <h1>Country : {country}</h1>
        </div>
    )
}

export default PlaceComponent;