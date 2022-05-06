import React, { MouseEvent, useCallback, useState } from 'react';
import RectangleCard from '../RectangleCard';
import { ProjectSection } from './styles';
import data from './constant';

const Projects = () => {
    const [hovered, setHovered] = useState('');

    const handleHover = useCallback((e) => {
        setHovered(e);
    }, []);

    return (
        <ProjectSection id='projects'>
            <h2 className='section-title'>Projects</h2>
            {data.map(({ tag, desc, link, title }) => (
                <RectangleCard
                    handleHover={handleHover}
                    key={title}
                    tag={tag}
                    title={title}
                    desc={desc}
                    link={link}
                    fade={(hovered && hovered !== title) || false}
                />
            ))}
        </ProjectSection>
    );
};

export default Projects;
