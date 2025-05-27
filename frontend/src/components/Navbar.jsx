import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 
        ${scrolled ? 'bg-white' : 'bg-transparent'}
      `}
        >
            <nav className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center text-black">
                <div className="text-3xl font-bold">태희's Portfolio</div>
                <ul className="flex gap-6 text-lg font-semibold">
                    <li><a href="#about" className="hover:text-orange-400">About</a></li>
                    <li><a href="#skills" className="hover:text-orange-400">Skills</a></li>
                    <li><a href="#projects" className="hover:text-orange-400">Projects</a></li>
                    <li><a href="#experience" className="hover:text-orange-400">Experience</a></li>
                    <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
