import { Fragment, useState } from "react";
import LabelWithInfomation from "./LabelWithInfomation";
import { useDispatch } from "react-redux";

export default function FormInput({ searchType, placeholder, information }) {
    let [searchInput, setSearchInput] = useState('');
    let dispatch = useDispatch();

    function handleValueChange(event) {
        setSearchInput(event.target.value);
        dispatch({
            type: 'SET_SEARCH_VALUE',
            searchValue: event.target.value
        });

    }

    return (
        <Fragment>
            <LabelWithInfomation information={information} searchType={searchType}/>
            <input className="search-input p-2 border rounded" type={searchType} placeholder={placeholder} value={searchInput} onChange={handleValueChange} />
        </Fragment>
    )
}