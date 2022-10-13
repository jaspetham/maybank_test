const SEARCH = "search";
const SEARCH_OPTIONS = "search_options";

export const search = (search) =>({
    type: SEARCH,
    search
});
const initialState ={
    search: '',
};

export default (state = initialState, action) =>{
    switch(action.type){
        case SEARCH:
            const { search } = action;
            return {...state, search};
        default:
            return state;
    }
};