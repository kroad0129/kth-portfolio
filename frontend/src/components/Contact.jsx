import React from 'react';

function Contact() {
    return (
        <section
            id="contact"
            className="relative z-20 bg-gradient-to-b from-white to-green-500 text-white h-screen flex flex-col justify-center items-center text-center px-4"
        >
            <h1 className="text-5xl font-bold mb-4 mt-6">Contact 👋</h1>
            <p className="text-xl mb-6">공부하기 싫다.</p>

            {/* 언덕 SVG */}
            <svg
                className="absolute bottom-0 left-0 w-full h-[300x]"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="#4CAF50"
                    d="M0,160 C360,280 1080,40 1440,160 L1440,320 L0,320 Z"
                />
            </svg>
        </section>
    );
}

export default Contact;
