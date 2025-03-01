import { useState } from "react";
import IMEISearch from "./IMEISearch";
import MobileSearch from "./MobileSearch";
import Tab from "./common/Tab";

export default function CompatibilityChecker() {
    let [tab, setTab] = useState('MOBILE');

    let tabsName = [{
        label: 'Search By Mobile', value: 'MOBILE', icon: 'M7 2a1 1 0 00-1 1v14a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1H7zm0 2h6v12H7V4z'
    }, {
        label: 'Search By IMEI', value: 'IMEI', icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm-1 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'
    }];

    function setTabType(tabType) {
        setTab(tabType);
    }
    return (
        <div className="flex flex-col items-center mt-6">
            <h3 className="mb-10">You can enter your phone model or IMEI number to check if it’s compatible with US Mobile.</h3>
            <div className="flex gap-2 mb-4">
                <Tab tabsName={tabsName} tab={tab} setTabType={setTabType} />
            </div>
            <div className="space-y-4 mt-4">
                {tab === 'MOBILE' ? <MobileSearch /> : <IMEISearch />}
            </div>
        </div>
    )
}