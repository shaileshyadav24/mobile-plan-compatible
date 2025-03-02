import { useState } from "react";
import IMEISearch from "./IMEISearch";
import MobileSearch from "./MobileSearch";
import Tab from "./common/Tab";
import { tabsName } from "../constant/tabsName";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from 'react-query';
import PhonePlans from "./PhonePlans";
import fetchCompatiblePlans from "../services/api";

export default function CompatibilityChecker() {
    let [tab, setTab] = useState('MOBILE');
    let queryClient = useQueryClient();
    let mutation = useMutation(fetchCompatiblePlans)
    let state = useSelector(state => state);

    function setTabType(tabType) {
        setTab(tabType);
    }

    async function submitData() {
        let body = JSON.stringify({
            searchType: state.searchType,
            searchValue: state.searchValue
        });

        try {
            let response = await mutation.mutateAsync(body);
            await queryClient.invalidateQueries('phonePlans');
            if (response.plans.length > 0) {
                await queryClient.setQueryData('phonePlans', response.plans);
            } else {
                await queryClient.setQueryData('phonePlans', []);
            }
        } catch (error) {
            console.error(error);
        }
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

            {mutation.isLoading && <p className="mt-4">Loading...</p>}
            {mutation.isError && <p className="mt-4">Something went wrong...</p>}
            {mutation.isSuccess && <PhonePlans />}
            
        </div>
    )
}