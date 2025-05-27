import { useEffect, useState } from 'react';

function ScrollIndicator() {
    const [scrollRatio, setScrollRatio] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const container = document.getElementById('fadein-target');
        if (!container) return;

        const handleScroll = () => {
            const rect = container.getBoundingClientRect();

            const inView = rect.top < window.innerHeight * 0.3 && rect.bottom > 0;
            setIsVisible(inView);

            const scrollTop = window.scrollY - container.offsetTop;
            const maxScroll = container.scrollHeight - window.innerHeight;
            const ratio = maxScroll > 0 ? scrollTop / maxScroll : 0;
            setScrollRatio(Math.min(1, Math.max(0, ratio)));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed left-10 top-1/2 transform -translate-y-1/2 w-20 z-50 pointer-events-none
        transition-opacity duration-500 ease-in-out 
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="relative h-80 w-full flex justify-center">
                <img
                    src={
                        scrollRatio >= 1
                            ? '/images/cat-landing.png'
                            : '/images/cat-parachute.png'
                    }
                    alt="Scroll Cat"
                    className="absolute w-20 transition-all duration-300 ease-in-out"
                    style={{
                        top: `calc(${scrollRatio * 100}% + 20px)`
                    }}
                />
            </div>
        </div>
    );
}

export default ScrollIndicator;
