import FormInput from "./common/FormInput"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import {IMEISearchContent} from "../constant/IMEISearch";

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
            setError(IMEISearchContent.validationMessage);
        } else {
            submitData();
        }
    }

    return (
        <div className="w-full">
            <FormInput searchType="number" 
                placeholder={IMEISearchContent.placeholder}  
                information={IMEISearchContent.informationText} />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button disabled={isLoading} className="w-full bg-blue-500 mt-2 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400" onClick={searchPlanByIMEI}>{isLoading ? IMEISearchContent.checkingText : IMEISearchContent.buttonText}</button>
        </div>
    )

}