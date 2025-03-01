import FormInput from "./common/FormInput"
import { useState } from "react"
import { useDispatch } from "react-redux";

export default function MobileSearch() {
    let dispatch = useDispatch();
    let [searchValue, setSearchValue] = useState('');

    function searchPlanByMobile() {
        dispatch({
            type: 'SET_SEARCH_TYPE',
            searchType: 'mobile'
        });

        dispatch({
            type: 'SET_SEARCH_VALUE',
            searchValue: searchValue
        });
    }

    return (
        <div className="mobile-search">
            <FormInput searchType="text" placeholder="e.g., iPhone 14, Samsung Galaxy S23" searchInput={searchValue} setSearchInput={setSearchValue} />
            <button className="w-full bg-blue-500 mt-2 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400" onClick={searchPlanByMobile}>Search</button>
        </div>
    )

}