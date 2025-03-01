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