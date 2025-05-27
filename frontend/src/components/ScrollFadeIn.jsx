import { useEffect, useRef, useState } from 'react';

export default function ScrollFadeIn({ children }) {
    const ref = useRef();
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setShow(true);
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`scroll-fade-in ${show ? 'show' : ''}`}>
            {children}
        </div>
    );
}
