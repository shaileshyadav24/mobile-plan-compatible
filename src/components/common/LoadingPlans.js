export default function LoadingPlans() {

    let loadingItems = [
        {id: 1},
        {id: 2},
        {id: 3},
    ]

    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 animate-pulse">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    loadingItems.map(plan => {
                        return (
                            <div key={plan.id} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
                                <h3 className="mb-4 text-2xl font-semibold w-60 h-4 bg-gray-200 rounded-full"></h3>
                                <p className="font-light text-gray-500 sm:text-lg w-60 h-4 bg-gray-200 rounded-full"></p>
                                <div className="flex justify-center items-baseline my-8">
                                    <span className="mr-2 text-5xl font-extrabold w-60 h-4 bg-gray-200 rounded-full"></span>
                                </div>
                                <ul className="mb-8 space-y-4 text-left">
                                    {
                                        loadingItems && loadingItems.length > 0 && loadingItems.map((feature, index) => {
                                            return (<li key={index} className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span className="w-60 h-4 bg-gray-200 rounded-full"></span>
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
    )
}