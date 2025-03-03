import { Fragment } from "react";
import { useQuery } from "react-query"
import NoPlansFound from "./NoPlansFound";
import { PhonePlansContent } from "../constant/PhonePlans";

export default function PhonePlans() {

    const { data: phonePlans } = useQuery({
        queryKey: ['phonePlans'],
        queryFn: () => { return phonePlans; }
    });

    return (
        <Fragment>
            {phonePlans && phonePlans.length > 0 &&
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">{PhonePlansContent.title}</h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl">{PhonePlansContent.description}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            phonePlans.map(plan => {
                                return (
                                    <div key={plan.id} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow hover:drop-shadow-2xl">
                                        <h3 className="mb-4 text-2xl font-semibold">{plan.planName}</h3>
                                        {plan.mostPopular &&
                                            <div
                                                class="mb-2 rounded bg-blue-500 px-2 py-2 text-xs font-medium uppercase leading-normal text-white mr-auto ml-auto mb-5 w-1/2">
                                                {PhonePlansContent.mostPopular}
                                            </div>
                                        }
                                        <p className="font-light text-gray-500 sm:text-lg">{plan.description}</p>
                                        <div className="flex justify-center items-baseline my-8">
                                            <span className="mr-2 text-5xl font-extrabold">${plan.price}</span>
                                            <span className="text-gray-500">{PhonePlansContent.price}</span>
                                        </div>
                                        <ul className="mb-8 space-y-4 text-left">
                                            {
                                                plan.features && plan.features.length > 0 && plan.features.map((feature, index) => {
                                                    return (<li key={index} className="flex items-center space-x-3">
                                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                        <span>{feature}</span>
                                                    </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
            {
                phonePlans && phonePlans.length === 0 && <NoPlansFound />
            }

        </Fragment>
    )
}