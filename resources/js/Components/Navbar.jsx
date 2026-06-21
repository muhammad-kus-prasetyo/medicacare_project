import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
    return (
        <>
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-blue-900 via-cyan-800 to-sky-800 text-white">
                <div className="container mx-auto px-6 h-10 flex justify-between items-center text-sm">

                    <div className="flex gap-6">
                        <a
                            href="mailto:info@medicacare.com"
                            className="flex items-center gap-2 hover:text-cyan-300 transition duration-300"
                        >
                            <MdEmail className="text-lg" />
                            info@medicacare.com
                        </a>

                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-green-400 transition duration-300"
                        >
                            <FaWhatsapp size={18} />
                            +62 812-3456-7890
                        </a>
                    </div>

                    <div>
                        <span>🕒 Senin - Sabtu : 08.00 - 21.00</span>
                    </div>

                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-6 h-20 flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img
                            src="/logo.png"
                            alt="MedicaCare Logo"
                            className="w-12 h-12 object-contain"
                        />

                        <div>
                            <h1 className="text-xl font-bold text-blue-600">
                                MedicaCare
                            </h1>
                            <p className="text-xs text-gray-500">
                                Melayani Kita Semua
                            </p>
                        </div>
                    </div>

                    {/* Menu */}
                    <ul className="hidden md:flex gap-8 font-medium text-gray-700">
                        <li>
                            <a href="#home" className="hover:text-blue-600 transition">
                                Beranda
                            </a>
                        </li>

                        <li>
                            <a href="#fitur" className="hover:text-blue-600 transition">
                                Fitur
                            </a>
                        </li>

                        <li>
                            <a href="#tentang" className="hover:text-blue-600 transition">
                                Tentang
                            </a>
                        </li>

                        <li>
                            <a href="#kontak" className="hover:text-blue-600 transition">
                                Kontak
                            </a>
                        </li>
                    </ul>

                    {/* Button */}
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                        Login
                    </button>

                </div>
            </nav>
        </>
    );
}