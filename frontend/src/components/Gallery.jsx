function Gallery() {
    return (
        <section className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
            <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 p-8">
                <div className="transform scale-110 -rotate-6">
                    <img
                        src="/cat.jpg"
                        alt="귀여운 고양이"
                        loading="lazy"
                        className="w-64 rounded-lg transition-transform duration-300 hover:scale-110"
                    />
                </div>
                <div className="transform scale-110 -rotate-6">
                    <img
                        src="/cat.jpg"
                        alt="귀여운 고양이"
                        loading="lazy"
                        className="w-64 rounded-lg transition-transform duration-300 hover:scale-110"
                    />
                </div>
            </div>
        </section>
    );
}

export default Gallery;
