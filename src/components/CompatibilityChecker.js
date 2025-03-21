import { Fragment, useState } from "react";
import IMEISearch from "./IMEISearch";
import MobileSearch from "./MobileSearch";
import Tab from "./ui/Tab";
import { tabsName } from "../constant/tabsName";
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQueryClient } from 'react-query';
import PhonePlans from "./PhonePlans";
import fetchCompatiblePlans from "../services/api";
import LoadingPlans from "./ui/LoadingPlans";
import { CompatibilityCheckerContent } from "../content/CompatibilityChecker";

// Component to check compatibility of phone with plans
export default function CompatibilityChecker() {
    let [tab, setTab] = useState('MOBILE');
    let [isError, setIsError] = useState('');
    let dispatch = useDispatch();
    let queryClient = useQueryClient();
    let mutation = useMutation(fetchCompatiblePlans)

    // Get search type and search value from redux store
    let searchType = useSelector(state => state.searchType);
    let searchValue = useSelector(state => state.searchValue);

    // Function to set tab type 
    // When user click on tab, set tab type and reset search value
    // tabType - Tab type to set, e.g., MOBILE or IMEI
    function setTabType(tabType) {
        setTab(tabType);
        dispatch({ type: 'SET_SEARCH_VALUE', searchValue: '' });
    }

    // Function to submit data
    // Call API to get phone plans based on search type and search value
    async function submitData() {
        let body = JSON.stringify({
            searchType,
            searchValue
        });
        setIsError(false);
        try {
            // Call API to get phone plans based on search type and search value
            let response = await mutation.mutateAsync(body);
            
            await queryClient.invalidateQueries('phonePlans');
            if (response.plans.length > 0) {
                // Update phonePlans in queryClient
                await queryClient.setQueryData('phonePlans', response.plans);
            } else {
                // If no plans found, set phonePlans to empty array
                await queryClient.setQueryData('phonePlans', []);
            }
        } catch (error) {
            setIsError(true);
        }
    };

    return (
        <Fragment>
            <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mt-10">
                {CompatibilityCheckerContent.title}
            </h1>
            <div className="flex flex-col items-center mt-6 mb-10">
                <h3 aria-label={CompatibilityChecker.description} className="mb-10">{CompatibilityCheckerContent.description}</h3>
                <div className="flex gap-2 mb-4">
                    <Tab tabsName={tabsName} tab={tab} setTabType={setTabType} />
                </div>
                <div className="space-y-4 mt-4">
                    {tab === 'MOBILE' ? <MobileSearch isLoading={mutation.isLoading} submitData={submitData} /> : <IMEISearch isLoading={mutation.isLoading} submitData={submitData} />}
                </div>
                {mutation.isLoading && <LoadingPlans />}
                {isError && <h2 className="mt-4">{CompatibilityCheckerContent.errorMessaage}</h2>}
            </div>
            {mutation.isSuccess && <PhonePlans />}
        </Fragment>
    )
}