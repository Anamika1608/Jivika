import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

const Hero = () => {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);
    return (
        <div className="relative h-screen flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.svg"
                    alt="hero"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-white font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
                    Find The Perfect<br />
                    Plant For Your<br />
                    Home
                </h1>
                <Link to="/explore-plants">
                    <button className="mt-6 px-6 py-3 text-xl sm:text-2xl bg-[#162C22] text-white rounded-full hover:bg-opacity-75 transition duration-300">
                        Explore Plants
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;