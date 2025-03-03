// State of the application
// This is the initial state of the application
// It has two properties:   
// - searchType: Type of search, e.g., MOBILE or IMEI
// - searchValue: Value to search
const initialState = {
  seachType: '',
  searchValue: ''
};

// Reducer to set search type and search value
// state: Current state of the application
// action: Action to perform
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
