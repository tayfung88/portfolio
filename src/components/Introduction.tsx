import React from 'react';
import TitleEffect from './TitleEffect';

const Introduction: React.FC = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center md:items-start px-4 pt-16 max-w-7xl mx-auto">
        <div className="md:w-7/12 flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Tayfun GUGLU</h2>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                <TitleEffect />
            </h1>
            <p className="text-gray-700 text-lg">
            Bonjour, je suis un développeur web passionné avec une expérience en développement front-end et back-end. J'adore créer des applications web performantes.
            </p>
        </div>
        <div className="w-full md:w-5/12 flex justify-center md:justify-end mb-8 md:mb-0">
    <img
        src="./public/images/pic.jpg"
        alt="Photo Tayfun GUGLU"
        className="w-full max-w-[10rem] md:max-w-[15rem] lg:max-w-[10rem] rounded-full shadow-xl border-4 border-transparent transition-all duration-500 hover:border-gray-600 hover:shadow-2xl hover:scale-105"
    />
</div>
    </section>
    );
};

export default Introduction;