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
    let [isError, setIsError] = useState('');

    let queryClient = useQueryClient();
    let mutation = useMutation(fetchCompatiblePlans)
    
    let searchType = useSelector(state => state.searchType);
    let searchValue = useSelector(state => state.searchValue);

    function setTabType(tabType) {
        setTab(tabType);
    }

    async function submitData() {
        let body = JSON.stringify({
            searchType,
            searchValue
        });
        setIsError(false);
        try {
            let response = await mutation.mutateAsync(body);
            await queryClient.invalidateQueries('phonePlans');
            if (response.plans.length > 0) {
                await queryClient.setQueryData('phonePlans', response.plans);
            } else {
                await queryClient.setQueryData('phonePlans', []);
            }
        } catch (error) {
            setIsError(true);
        }
    };

    return (
        <div className="flex flex-col items-center mt-6">
            <h3 className="mb-10">You can enter your phone model or IMEI number to check if it’s compatible with US Mobile.</h3>
            <div className="flex gap-2 mb-4">
                <Tab tabsName={tabsName} tab={tab} setTabType={setTabType} />
            </div>
            <div className="space-y-4 mt-4">
                {tab === 'MOBILE' ? <MobileSearch isLoading={mutation.isLoading} submitData={submitData} /> : <IMEISearch isLoading={mutation.isLoading} submitData={submitData} />}
            </div>

            {mutation.isLoading && <p className="mt-4">Loading...</p>}
            {isError && <p className="mt-4">Something went wrong...Please try again.</p>}
            {mutation.isSuccess && <PhonePlans />}

        </div>
    )
}