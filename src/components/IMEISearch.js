import FormInput from "./common/FormInput"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

export default function IMEISearch({ isLoading, submitData }) {
    let dispatch = useDispatch();
    let searchValue = useSelector(state => state.searchValue);
    let [error, setError] = useState('');

    useEffect(() => {
        dispatch({
            type: 'SET_SEARCH_TYPE',
            searchType: 'IMEI'
        });
    }, []);

    function searchPlanByIMEI() {
        const imeiRegex = /^[0-9]{15}$/;
        setError('');
        if (!imeiRegex.test(searchValue)) {
            setError('Please enter a valid 15-digit IMEI number');
        } else {
            submitData();
        }
    }

    return (
        <div className="w-full">
            <FormInput searchType="number" 
                placeholder="Enter 15-digit IMEI"  
                information="You can find your IMEI number by dialing *#06# on your phone's keypad or checking your device's settings." />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button disabled={isLoading} className="w-full bg-blue-500 mt-2 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400" onClick={searchPlanByIMEI}>{isLoading ? 'Checking...' : 'Search Compatability'}</button>
        </div>
    )

}