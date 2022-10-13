import axios from 'axios';

export function requestGetPlace(text){
    return axios.request({
        method: "get",
        url: `https://api.geocode.earth/v1/autocomplete?api_key=ge-b5540b2225216677&text=${text}`
    })
}