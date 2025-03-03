import { Fragment } from "react";

// Component to display tabs passed as props in tabsName array
// tabsName - Array of tabs to display
// tab - Current tab selected
// setTabType - Function to set tab type
export default function Tab({tabsName, tab, setTabType}) {

    return (
        <Fragment>
            {
                tabsName.map((data, index) => (
                    <button
                        key={index}
                        aria-label={data.label}
                        type="button"
                        className={`flex-4 p-2 pr-4 rounded ${tab === data.value ? 'bg-blue-500 text-white' : 'bg-gray-200'
                            }`}
                        onClick={() => setTabType(data.value)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d={data.icon} clipRule="evenodd" />
                        </svg>
                        {data.label}
                    </button>
                ))
            }
        </Fragment>
    )
}