import { Fragment } from "react";
import { useQuery } from "react-query"
export default function PhonePlans() {

    const { data: phonePlans } = useQuery({
        queryKey: ['phonePlans'], 
    });        

    return (
        <Fragment>
            {
                phonePlans && phonePlans.length > 0 && phonePlans.map(plan => {
                    return (
                        <div key={plan.id} className="bg-white shadow-md p-4 w-96">
                            <h3 className="text-xl font-semibold">{plan.name}</h3>
                        </div>
                    )
                })
            }
            {
                phonePlans && phonePlans.length === 0 && <p className="mt-4">No plans available</p>
            }
        
        </Fragment>
    )
}