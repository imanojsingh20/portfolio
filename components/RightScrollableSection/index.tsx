import React from 'react';
import Blog from '../Blog';
import ContactMe from '../ContactMe';
import Facts from '../Facts';
import Projects from '../Projects';
import { RightScrolableSectionElement } from './styles';
import Skills from '../Skills';

const RightScrolableSection = () => {
    return (
        <RightScrolableSectionElement>
            <Blog />
            <Projects />
            <Skills />
            <Facts />
            <ContactMe />
        </RightScrolableSectionElement>
    );
};

export default RightScrolableSection;
