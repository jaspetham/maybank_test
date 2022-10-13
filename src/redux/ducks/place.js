export const GET_PLACE = 'GET_PLACE';
const SET_PLACE = 'SET_PLACE';

export const getPlace = (text) =>({
    type: GET_PLACE,
    text
});
export const setPlace = (place) =>({
    type: SET_PLACE,
    place
});

const initialState ={
    place: ''
};

export default (state = initialState, action) =>{
    switch(action.type){
        case GET_PLACE:
            const { text } = action;
            return {...state, text};
        case SET_PLACE:
            const { place } = action;
            return {...state, place};
        default:
            return state;
    }
}