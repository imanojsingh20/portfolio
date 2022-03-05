import React from 'react';
import Blog from '../Blog';
import ContactMe from '../ContactMe';
import Facts from '../Facts';
import Projects from '../Projects';
import { RightScrolableSectionElement } from './styles';

const RightScrolableSection = () => {
    return (
        <RightScrolableSectionElement>
            <Blog />
            <Projects />
            <Facts />
            <ContactMe />
        </RightScrolableSectionElement>
    );
};

export default RightScrolableSection;
