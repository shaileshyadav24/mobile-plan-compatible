import { Fragment, useState } from 'react';

export default function LabelWithInfomation({ information, label }) {
    let [showPopup, setShowPopup] = useState(false);

    return (
        <Fragment>
            <label className="block mb-2 text-base font-medium">
                {label}
                <a className="ml-2 text-gray-500 cursor-pointer inline-block align-sub" onClick={() => setShowPopup(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8-3a1 1 0 100 2 1 1 0 000-2zm1 4a1 1 0 00-2 0v3a1 1 0 002 0v-3z" clipRule="evenodd" />
                    </svg>
                </a>
            </label>
            {showPopup && (
                <div className="fixed bg-white border p-4 rounded shadow-lg mt-2 left-1/4 right-1/4">
                    <a className="absolute top-0 right-0 p-2" onClick={() => setShowPopup(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <p className="text-sm w-11/12">{information}</p>
                </div>
            )}
        </Fragment>
    )
}