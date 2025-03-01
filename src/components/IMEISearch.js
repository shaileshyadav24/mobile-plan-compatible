import FormInput from "./common/FormInput"
import { useState } from "react"
import { useDispatch } from "react-redux";

export default function IMEISearch() {
    let dispatch = useDispatch();
    let [searchValue, setSearchValue] = useState('');
    let [error, setError] = useState('');

    function searchPlanByMobile() {
        const imeiRegex = /^[0-9]{15}$/;
        setError('');
        if (!imeiRegex.test(searchValue)) {
          setError('Please enter a valid 15-digit IMEI number');
        } else {
            dispatch({
                type: 'SET_SEARCH_TYPE',
                searchType: 'IMEI'
            });

            dispatch({
                type: 'SET_SEARCH_VALUE',
                searchValue: searchValue
            });
        }
    }

    return (
        <div className="w-full">
            <FormInput searchType="number" placeholder="Enter 15-digit IMEI" searchInput={searchValue} setSearchInput={setSearchValue} />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button className="w-full bg-blue-500 text-white p-2 mt-2 rounded hover:bg-blue-600 disabled:bg-gray-400" onClick={searchPlanByMobile}>Search</button>
        </div>
    )

}