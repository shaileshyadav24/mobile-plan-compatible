const initialState = {
  seachType: '',
  searchValue: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SEARCH_TYPE':
            return {
                ...state,
                searchType: action.searchType
            };
        case 'SET_SEARCH_VALUE':
            return {
                ...state,
                searchValue: action.searchValue
            };
        default:
            return state;
    }
};


export default reducer;
