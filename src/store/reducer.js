const initialState = {
  seachType: '',
  searchValue: '',
  result: []
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
        case 'SET_RESULT':
            return {
                ...state,
                result: action.result
            };
        default:
            return state;
    }
};


export default reducer;
