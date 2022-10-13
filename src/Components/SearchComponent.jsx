import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import {search} from "../redux/ducks/search";
import './SearchComponent.css';

const SearchComponent =  (props) =>{
    const [query, setQuery] = useState("");

    const {handleSubmit} = props;

    const dispatch = useDispatch();
    
    useEffect(() =>{
        const timeOutId = setTimeout(() => dispatch(search(query)), 500);
        return () => clearTimeout(timeOutId);
    },[query])
    return(
        <Form onSubmit={handleSubmit}>
           <Form.Group className="mb-3">
                <Form.Label>Enter Address:</Form.Label>
                <Form.Control onChange={event => setQuery(event.target.value)} type="text" placeholder="Malaysia" />
            </Form.Group> 
        </Form>
    )
}

export default SearchComponent;