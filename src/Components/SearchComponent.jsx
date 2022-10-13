import React from "react";
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import {search} from "../redux/ducks/search";
import './SearchComponent.css';

const SearchComponent =  (props) =>{
    const {handleSubmit} = props;
    const dispatch = useDispatch();
    const handleOnChange = (e) =>{
        dispatch(search(e.target.value));
    }
    return(
        <Form onSubmit={handleSubmit}>
           <Form.Group className="mb-3">
                <Form.Label>Enter Address:</Form.Label>
                <Form.Control onChange={handleOnChange} type="text" placeholder="Malaysia" />
            </Form.Group> 
        </Form>
    )
}

export default SearchComponent;