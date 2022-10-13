import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import './SearchComponent.css';
import { useDispatch, useSelector } from "react-redux";
import {search} from "../redux/ducks/search";

const SearchComponent =  (props) =>{
    const [query, setQuery] = useState("");

    const {handleSubmit,options} = props;

    const dispatch = useDispatch();
    const searchResult = useSelector((state) => state.search.search);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            dispatch(search(query));
        },500);

        return () => {
            clearTimeout(timeOutId);
        };
    },[query])

    const handleOnInputChange = (event) =>{
        if(event != ''){
            setQuery(event);
        }
    }
    const handleOnChange = (event) =>{
        setQuery(event.label);
    }
    return(
        <div className="search-wrapper">
            <Form onSubmit={handleSubmit}>
               <Form.Group className="mb-3">
                    <Select onChange={handleOnChange} onInputChange={handleOnInputChange} options={options} placeholder={'Enter Address'}/>
                </Form.Group>
            </Form>
            <p>Search Result : {searchResult}</p>
        </div>
    )
}

export default SearchComponent;