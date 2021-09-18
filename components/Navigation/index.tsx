import { NavigationWrapper, NavItem } from './styles';
import SECTIONS from './constant';
import { useState } from 'react';

type Sections = typeof SECTIONS;

const Navigation = () => {
    const [activeSection, setActiveSection] = useState<string>(SECTIONS['projects']);

    const getKeyValue =
        <T extends object, U extends keyof T>(key: U) =>
        (obj: T) =>
            obj[key];

    return (
        <NavigationWrapper>
            {Object.keys(SECTIONS).map((navItem, index) => (
                <NavItem
                    key={navItem}
                    onClick={(e) => setActiveSection(SECTIONS[navItem as keyof Sections])}
                    isActive={activeSection === SECTIONS[navItem as keyof Sections]}
                >
                    <a href={`${SECTIONS[navItem as keyof Sections]}`}>
                        <span>0{index + 1}</span> <span className='line'></span> <span>{navItem.toUpperCase()}</span>
                    </a>
                </NavItem>
            ))}
        </NavigationWrapper>
    );
};

export default Navigation;
