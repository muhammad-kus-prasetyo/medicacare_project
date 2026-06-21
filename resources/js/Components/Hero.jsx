export default function Hero() {
    return (
        <section
            id="home"
            className="h-[calc(100vh-80px)] bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 flex items-center overflow-hidden"
        >
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    {/* Kiri */}
                    <div className="text-white">
                        <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
                            🏥 Sistem Informasi Klinik & Apotek
                        </span>

                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                            Pelayanan Kesehatan
                            <span className="block text-cyan-200">
                                Lebih Cepat dan Modern
                            </span>
                        </h1>

                        <p className="text-base lg:text-lg text-blue-100 max-w-xl mb-6 leading-relaxed">
                            Kelola data pasien, jadwal dokter, rekam medis,
                            resep digital, dan stok obat dalam satu platform
                            yang aman, cepat, dan mudah digunakan.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                                Mulai Sekarang
                            </button>

                            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                                Pelajari Lebih Lanjut
                            </button>
                        </div>

                        {/* Statistik */}
                        <div className="grid grid-cols-3 gap-4 max-w-md">
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-center">
                                <h3 className="text-2xl font-bold">1000+</h3>
                                <p className="text-sm text-blue-100">
                                    Pasien
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-center">
                                <h3 className="text-2xl font-bold">50+</h3>
                                <p className="text-sm text-blue-100">
                                    Dokter
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-center">
                                <h3 className="text-2xl font-bold">24/7</h3>
                                <p className="text-sm text-blue-100">
                                    Support
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Kanan */}
                    <div className="hidden lg:flex justify-center">
                        <img
                            src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
                            alt="Doctor Illustration"
                            className="w-full max-w-sm rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}