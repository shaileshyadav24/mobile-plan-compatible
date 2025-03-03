import { Fragment, useEffect, useState } from "react";

export default function ScrollToTop() {
    let [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', showScrollToTopButton);
        return () => {
            window.removeEventListener('scroll', showScrollToTopButton);
        }
    }, []);

    function showScrollToTopButton() {
        if (window.scrollY > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Fragment>
            {isVisible && (
                <button className="fixed bottom-10 right-5 h-14 w-14 rounded-full border-4 border-blue-500 hover:bg-blue-500" onClick={() => scrollToTop()}>
                    &#8679;
                </button>
            )}
        </Fragment>
    )
}