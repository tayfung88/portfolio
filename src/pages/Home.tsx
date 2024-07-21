import React from 'react';
import Introduction from '../components/Introduction';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Home: React.FC = () => {
    return (
        <div className="container mx-auto">
            <Introduction />
            <Skills />
            <Projects />
        </div>
    );
}

export default Home;
