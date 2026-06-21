import Navbar from "../Components/Navbar.jsx";
// import Footer from "../Components/Footer";

export default function LandingLayout({ children }) {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main>
                {children}
            </main>

            {/* <Footer /> */}
        </div>
    );
}