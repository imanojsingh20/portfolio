import React, { MouseEvent, useCallback, useState } from 'react';
import RectangleCard from '../RectangleCard';
import { ProjectSection } from './styles';
import data from './constant';
import sections from '../Navigation/constant';

const Blog = () => {
    const [hovered, setHovered] = useState('');

    const handleHover = useCallback((e) => {
        setHovered(e);
    }, []);

    return (
        <ProjectSection id='blog'>
            <h2 className='section-title'>Blog</h2>
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

export default Blog;
