import { useState } from "react";
import IMEISearch from "./IMEISearch";
import MobileSearch from "./MobileSearch";

export default function CompatibilityChecker() {
    let [tab, setTab] = useState('MOBILE');

    let tabsName = [{
        label: 'Search By Mobile', value: 'MOBILE'
    }, {
        label: 'Search By IMEI', value: 'IMEI'
    }];

    function setTabType(tabType) {
        setTab(tabType);
    }
    return (
        <div className="flex flex-col items-center mt-6">
            <div className="flex gap-2 mb-4">
                {
                    tabsName.map((data, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`flex-4 p-2 rounded ${tab === data.value ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                }`}
                            onClick={() => setTabType(data.value)}
                        >
                            { data.value === 'MOBILE' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M7 2a1 1 0 00-1 1v14a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1H7zm0 2h6v12H7V4z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm-1 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clipRule="evenodd" />
                                </svg>
                            )}
                            {data.label}
                        </button>
                    ))
                }
            </div>
            <div className="space-y-4 mt-4">
                {tab === 'MOBILE' ? <MobileSearch /> : <IMEISearch />}
            </div>
        </div>
    )
}