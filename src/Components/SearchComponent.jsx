import React, { useEffect, useState } from "react";
import { Form } from 'antd';
import Select from 'react-select'
import './SearchComponent.css';
import { useDispatch, useSelector } from "react-redux";
import {search} from "../redux/ducks/search";

const SearchComponent =  (props) =>{
    const [query, setQuery] = useState("");

    const {
        handleSubmit, 
        options, 
        loadingState
    } = props;

    const dispatch = useDispatch();
    const searchResult = useSelector((state) => state.search.search);

    useEffect(() => {
        // search query with 500ms delay for smoother experience
        const timeOutId = setTimeout(() => {
            dispatch(search(query));
            loadingState(false);
        },500);

        return () => {
            clearTimeout(timeOutId);
        };
    },[query])

    // on key press
    const handleOnInputChange = (event) =>{
        if(event !== ''){
            setQuery(event);
            loadingState(true);
        }
    }
    // on select
    const handleOnChange = (event) =>{
        setQuery(event.label);
        loadingState(true);
    }
    return(
        <div className="w-full">
            <Form onSubmit={handleSubmit}>
               <Form.Item className="mb-3">
                    <Select 
                        onChange={handleOnChange} 
                        onInputChange={handleOnInputChange} 
                        options={options} 
                        placeholder={'Enter Address'}
                    />
                </Form.Item>
            </Form>
            <p className="text-white fs-400">
                {searchResult.length > 0 ? 
                    `Search Result: ${searchResult}`
                    :
                    `Where would you like to go?`
                }
            </p>
        </div>
    )
}

export default SearchComponent;