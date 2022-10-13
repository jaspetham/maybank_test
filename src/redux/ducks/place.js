export const GET_PLACE = 'GET_PLACE';
const SET_PLACE = 'SET_PLACE';
const SET_SINGLE_PLACE = 'SET_SINGLE_PLACE';

export const getPlace = (text) =>({
    type: GET_PLACE,
    text
});
export const setPlace = (place) =>({
    type: SET_PLACE,
    place
});
export const setSinglePlace = (singlePlace) =>({
    type: SET_SINGLE_PLACE,
    singlePlace
})

const initialState ={
    place: '',
    singlePlace:'',
};

export default (state = initialState, action) =>{
    switch(action.type){
        case GET_PLACE:
            const { text } = action;
            return {...state, text};
        case SET_PLACE:
            const { place } = action;
            return {...state, place};
        case SET_SINGLE_PLACE:
            const { singlePlace } = action;
            return {...state, singlePlace};
        default:
            return state;
    }
}