import { Fragment } from "react";

export default function FormInput({ searchType, placeholder, searchInput, setSearchInput }) {

    function handleValueChange(event) {
        setSearchInput(event.target.value);
    }

    return (
        <Fragment>
            <label className="block mb-2 text-sm font-medium">
                Please enter {searchType === 'number' ? 'IMEI Number' : 'Device Model'}
            </label>
            <input className="w-full p-2 border rounded" type={searchType} placeholder={placeholder} value={searchInput} onChange={handleValueChange} />
        </Fragment>
    )
}