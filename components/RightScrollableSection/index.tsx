import React from 'react';
import ContactMe from '../ContactMe';
import Facts from '../Facts';
import Projects from '../Projects';
import { RightScrolableSectionElement } from './styles';

const RightScrolableSection = () => {
    return (
        <RightScrolableSectionElement>
            <Projects />
            <Facts />
            <ContactMe />
        </RightScrolableSectionElement>
    );
};

export default RightScrolableSection;
