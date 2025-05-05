import React, { useCallback, useState } from 'react';
import { ProjectSection } from './styles';
import data from './constant';
import SkillsSection from './SkillsSection';

const Skills = () => {
    const [hovered, setHovered] = useState('');

    const handleHover = useCallback((e) => {
        setHovered(e);
    }, []);

    return (
        <ProjectSection id='skills'>
             <h2 className='section-title'>Skills</h2>
            {data.map(({ title, items }) => (
                <SkillsSection
                    handleHover={handleHover}
                    key={title}
                    title={title}
                    skills={items}
                    fade={(hovered && hovered !== title) || false}
                />
            ))}
        </ProjectSection>
    );
};

export default Skills;
