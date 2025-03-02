import { useState } from "react";
import IMEISearch from "./IMEISearch";
import MobileSearch from "./MobileSearch";
import Tab from "./common/Tab";
import { tabsName } from "../constant/tabsName";
import { useSelector } from "react-redux";
import { useMutation } from 'react-query';

export default function CompatibilityChecker() {
    let [tab, setTab] = useState('MOBILE');
    let state = useSelector(state => state);

    function setTabType(tabType) {
        setTab(tabType);
    }

    const mutation = useMutation({
        mutationKey: 'phoneCompatibility',
        mutationFn: (body) => {
            fetch("/getPhoneCompatibility", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body,
            }).then(res => res.json())
                .catch(err => {
                    throw new Error(err.message);
                })
        },
    });

    function submitData() {
        let body = JSON.stringify({
            searchType: state.searchType,
            searchValue: state.searchValue
        });
        mutation.mutate(body);
    };

    return (
        <div className="flex flex-col items-center mt-6">
            <h3 className="mb-10">You can enter your phone model or IMEI number to check if it’s compatible with US Mobile.</h3>
            <div className="flex gap-2 mb-4">
                <Tab tabsName={tabsName} tab={tab} setTabType={setTabType} />
            </div>
            <div className="space-y-4 mt-4">
                {tab === 'MOBILE' ? <MobileSearch submitData={submitData} /> : <IMEISearch submitData={submitData} />}
            </div>

            {
                state.result && state.result.length > 0 && (
                    state.result.map((data, index) => (
                        <div key={index} className="mt-4">
                            <h3 className="text-xl font-semibold">{data.name}</h3>
                            <p className="text-gray-500">{data.id}</p>
                        </div>
                    )))
            }
        </div>
    )
}