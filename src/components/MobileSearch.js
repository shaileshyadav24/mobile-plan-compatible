import FormInput from "./common/FormInput"
import { useState } from "react"
import { useDispatch } from "react-redux";

export default function MobileSearch() {
    let dispatch = useDispatch();
    let [searchValue, setSearchValue] = useState('');
    let [error, setError] = useState('');

    function searchPlanByMobile() {
        setError('');
        if (searchValue.trim().length === 0) {
            setError('Please enter your mobile name to search');
        } else {
            dispatch({
                type: 'SET_SEARCH_TYPE',
                searchType: 'mobile'
            });

            dispatch({
                type: 'SET_SEARCH_VALUE',
                searchValue: searchValue
            });
        }
    }

    return (
        <div className="w-full">
            <FormInput searchType="text" placeholder="e.g., iPhone 14, Samsung Galaxy S23" 
                information="To find your phone's model name, go to your phone's Settings menu, then navigate to About phone where you should see the model name listed under 'Model' or a similar label"
                searchInput={searchValue} setSearchInput={setSearchValue} />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button className="w-full bg-blue-500 mt-2 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400" onClick={searchPlanByMobile}>Search</button>
        </div>
    )

}