import FormInput from "./ui/FormInput"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import {IMEISearchContent} from "../content/IMEISearch";

// Component to display search form when user want to search using IMEI number
// isLoading: Boolean to show loading text on button
// submitData: Function to submit data
export default function IMEISearch({ isLoading, submitData }) {
    let dispatch = useDispatch();
    let searchValue = useSelector(state => state.searchValue);
    let [error, setError] = useState('');

    // Set search type to IMEI when component is mounted
    useEffect(() => {
        dispatch({
            type: 'SET_SEARCH_TYPE',
            searchType: 'IMEI'
        });
    }, []);

    // Function to search phone plans by IMEI
    // If search value is empty, show validation message
    // Else call submitData function to search plans
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
        <form action={searchPlanByIMEI} className="w-full">
            <FormInput searchType="number" 
                label={IMEISearchContent.label}
                placeholder={IMEISearchContent.placeholder}  
                information={IMEISearchContent.informationText} />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button type="submit" aria-label={IMEISearchContent.buttonText} disabled={isLoading} className="w-full bg-blue-500 mt-2 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400">{isLoading ? IMEISearchContent.checkingText : IMEISearchContent.buttonText}</button>
        </form>
    )

}