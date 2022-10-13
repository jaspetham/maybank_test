import axios from 'axios';

export function requestGetPlace(text){
    if(text !== ''){
        const API_KEY = 'ge-b5540b2225216677'; 
        const urlQuery = `https://api.geocode.earth/v1/autocomplete?api_key=${API_KEY}&text=${text}`
        return axios.request({
            method: "get",
            url: urlQuery
        })
    }
}