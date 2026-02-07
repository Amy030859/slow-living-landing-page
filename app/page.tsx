import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import AboutMe from '@/components/AboutMe';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Navigation />
            <main>
                <Hero />
                <About />
                <Testimonials />
                <Services />
                <AboutMe />
            </main>
            <Footer />
        </>
    );
}
