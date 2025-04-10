function Hero() {
    return (
      <section className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">안녕하세요 👋</h1>
        <p className="text-xl mb-6">백엔드 개발자 지망생 김태희입니다.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/kroad0129"
            target="_blank"
            className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:kroad0129@konkuk.ac.kr"
            className="border border-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition"
          >
            Email
          </a>
        </div>
      </section>
    );
  }
  
  export default Hero;
  