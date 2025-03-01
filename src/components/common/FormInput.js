import { Fragment } from "react";
import LabelWithInfomation from "./LabelWithInfomation";

export default function FormInput({ searchType, placeholder, searchInput, setSearchInput, information }) {
    function handleValueChange(event) {
        setSearchInput(event.target.value);
    }

    return (
        <Fragment>
            <LabelWithInfomation information={information} searchType={searchType}/>
            <input className="search-input p-2 border rounded" type={searchType} placeholder={placeholder} value={searchInput} onChange={handleValueChange} />
        </Fragment>
    )
}