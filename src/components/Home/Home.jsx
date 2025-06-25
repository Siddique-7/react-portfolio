import { Link } from 'react-router-dom';
import reactImg from '../../assets/react-img.jpg';


export default function Home() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            <div className="flex flex-col md:flex-row items-center gap-14">
                
                {/* Left Side Image */}
                <div className="md:w-1/2 h-64 sm:h-90 overflow-hidden w-full">
                <img
                  src={reactImg}
                  alt="React Img"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />

                </div>

                {/* Right Side Content */}
                <div className="md:w-1/2 w-full text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Hi, I'm <span className="text-orange-700">React Dev</span>
                    </h1>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        I'm a React Developer who builds dynamic, high-performance web applications using modern JavaScript technologies.
                        I specialize in creating responsive user interfaces, managing component-based architectures, and optimizing frontend performance.
                        My goal is to turn complex problems into elegant user experiences.
                    </p>
                    <Link
                        to="/about"
                        className="inline-block px-6 py-3 text-white bg-orange-700 hover:bg-orange-800 rounded-lg font-medium"
                    >
                        Explore React
                    </Link>
                </div>


            </div>
        </div>
    );
}
