import React from 'react';
import RectangleCard from '../RectangleCard';
import { ProjectSection } from './styles';
import data from './constant';

const Projects = () => {
    return (
        <ProjectSection id='projects'>
            <h2>Projects</h2>
            {data.map(({ tag, desc, link, title }) => (
                <RectangleCard key={title} tag={tag} title={title} desc={desc} link={link} />
            ))}
        </ProjectSection>
    );
};

export default Projects;
