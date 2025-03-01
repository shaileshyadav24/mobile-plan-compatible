import { useState } from "react";
import IMEISearch from "./IMEISearch";
import MobileSearch from "./MobileSearch";
import Tab from "./common/Tab";
import { tabsName } from "../constant/tabsName";

export default function CompatibilityChecker() {
    let [tab, setTab] = useState('MOBILE');

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