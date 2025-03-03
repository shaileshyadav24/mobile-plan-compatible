import FormInput from "./common/FormInput"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { MobileSearchContent } from "../constant/MobileSearch";

export default function MobileSearch({ isLoading, submitData }) {
    let dispatch = useDispatch();
    let searchValue = useSelector(state => state.searchValue);
    let [error, setError] = useState('');

    useEffect(() => {
        dispatch({
            type: 'SET_SEARCH_TYPE',
            searchType: 'MOBILE'
        });
    }, []);

    function searchPlanByMobile() {
        setError('');
        if (searchValue.trim().length === 0) {
            setError(MobileSearchContent.validationMessage);
        } else {
            submitData();
        }
    }

    return (
        <div className="w-full">
            <FormInput searchType="text"
                placeholder={MobileSearchContent.placeholder}
                information={MobileSearchContent.informationText} />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button disabled={isLoading} className="w-full bg-blue-500 mt-2 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400" onClick={searchPlanByMobile}>{isLoading ? MobileSearchContent.checkingText : MobileSearchContent.buttonText}</button>
        </div>
    )

}