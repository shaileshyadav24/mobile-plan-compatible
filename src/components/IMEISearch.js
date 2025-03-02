import FormInput from "./common/FormInput"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function IMEISearch({ submitData }) {
    let dispatch = useDispatch();
    let state = useSelector(state => state);
    let [error, setError] = useState('');

    useEffect(() => {
        dispatch({
            type: 'SET_SEARCH_TYPE',
            searchType: 'IMEI'
        });
    }, []);

    function searchPlanByMobile() {
        const imeiRegex = /^[0-9]{15}$/;
        setError('');
        if (!imeiRegex.test(state.searchValue)) {
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
            <button 
                className="w-full bg-blue-500 text-white p-2 mt-2 rounded hover:bg-blue-600 disabled:bg-gray-400" 
                onClick={searchPlanByMobile}>Check Compatibility</button>
        </div>
    )

}