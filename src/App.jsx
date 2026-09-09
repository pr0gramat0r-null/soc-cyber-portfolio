import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Writeups from "./components/Writeups";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="relative overflow-hidden">
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <Writeups />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}