import React, { useEffect, useState } from 'react';
import './Skills.css'; 

interface Skill {
    title: string;
    description: string;
    images: string[];
}

const Skills: React.FC = () => {
    const [skillsData, setSkillsData] = useState<Skill[]>([]);

    useEffect(() => {
        fetch('src/data/skills.json') 
            .then(response => response.json())
            .then(data => setSkillsData(data))
            .catch(error => console.error('Error fetching skills data:', error));
    }, []);

    return (
        <section className="px-4 py-16 max-w-7xl mx-auto">
            <div className="space-y-16">
                {skillsData.map((skill, index) => (
                    <div key={index} className="flex flex-col space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
                            <p className="text-gray-700 mb-4">{skill.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-start">
                            {skill.images.map((image, i) => (
                                <img
                                    key={i}
                                    src={image}
                                    alt={`${skill.title} icon ${i}`}
                                    className="skill-image"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
