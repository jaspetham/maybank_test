import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import {search} from "../redux/ducks/search";
import './SearchComponent.css';
import Select from 'react-select'

const SearchComponent =  (props) =>{
    const [query, setQuery] = useState("");

    const {handleSubmit} = props;

    const dispatch = useDispatch();

    const places = useSelector(state => state.place.place);
    
    let placeData = [];
    let options = [];

    useEffect(() => {
        const timeOutId = setTimeout(() => dispatch(search(query)), 500);
        if(places){
            placeData = places.features
                .map(place =>{
                    return place.properties
                })
        }
        placeData.map((data) => {
            options.push({
                value: data.name,
                label: data.name
            })
        })
        return () => clearTimeout(timeOutId);
    },[query,placeData])
    

    const handleOnChange = (event) =>{
        setQuery(event);
    }
    return(
        <Form onSubmit={handleSubmit}>
           <Form.Group className="mb-3">
                <Form.Label>Enter Address:</Form.Label>
                {/* <Form.Control onChange={event => setQuery(event.target.value)} type="text" placeholder="Malaysia" /> */}
                <Select onInputChange={handleOnChange} options={options}/>
            </Form.Group> 
        </Form>
    )
}

export default SearchComponent;