import FormInput from "./common/FormInput"
import { useState } from "react"
import { useDispatch } from "react-redux";

export default function IMEISearch() {
    let dispatch = useDispatch();
    let [searchValue, setSearchValue] = useState('');

    function searchPlanByMobile() {
        dispatch({
            type: 'SET_SEARCH_TYPE',
            searchType: 'IMEI'
        });

        dispatch({
            type: 'SET_SEARCH_VALUE',
            searchValue: searchValue
        });
    }

    return (
        <div className="mobile-search">
            <FormInput searchType="number" placeholder="Enter 15-digit IMEI" searchInput={searchValue} setSearchInput={setSearchValue} />
            <button className="w-full bg-blue-500 text-white p-2 mt-2 rounded hover:bg-blue-600 disabled:bg-gray-400" onClick={searchPlanByMobile}>Search</button>
        </div>
    )

}