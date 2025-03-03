import FormInput from "./ui/FormInput"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { MobileSearchContent } from "../content/MobileSearch";

// Component to display search form when user want to search using Model name
// isLoading: Boolean to show loading text on button
// submitData: Function to submit data
export default function MobileSearch({ isLoading, submitData }) {
    let dispatch = useDispatch();
    let searchValue = useSelector(state => state.searchValue);
    let [error, setError] = useState('');

    // Set search type to MOBILE when component is mounted
    useEffect(() => {
        dispatch({
            type: 'SET_SEARCH_TYPE',
            searchType: 'MOBILE'
        });
    }, []);

    // Function to search phone plans by mobile
    // If search value is empty, show validation message
    // Else call submitData function to search plans
    function searchPlanByMobile() {
        setError('');
        if (searchValue.trim().length === 0) {
            setError(MobileSearchContent.validationMessage);
        } else {
            submitData();
        }
    }

    return (
        <form action={searchPlanByMobile} className="w-full">
            <FormInput searchType="text"
                label={MobileSearchContent.label}
                placeholder={MobileSearchContent.placeholder}
                information={MobileSearchContent.informationText} />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button type="submit" aria-label={MobileSearchContent.buttonText} disabled={isLoading} className="w-full bg-blue-500 mt-2 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400">{isLoading ? MobileSearchContent.checkingText : MobileSearchContent.buttonText}</button>
        </form>
    )

}