import { Fragment, useEffect, useState } from "react";

// Component to scroll to top of the page when user scoll down
export default function ScrollToTop() {
    let [isVisible, setIsVisible] = useState(false);

    // Add event listener on scroll when component is mounted
    // Remove event listener scroll when component is unmounted
    useEffect(() => {
        window.addEventListener('scroll', showScrollToTopButton);
        return () => {
            window.removeEventListener('scroll', showScrollToTopButton);
        }
    }, []);

    // Function to show scroll to top button when user scroll down
    function showScrollToTopButton() {
        if (window.scrollY > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    // Function to scroll to top of the page
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Fragment>
            {isVisible && (
                <button className="fixed bottom-10 right-5 h-14 w-14 rounded-full border-4 text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500" onClick={() => scrollToTop()}>
                    &#8679;
                </button>
            )}
        </Fragment>
    )
}