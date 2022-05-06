import { NavigationWrapper, NavItem } from './styles';
import SECTIONS from './constant';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Sections = typeof SECTIONS;

const navItems = Object.keys(SECTIONS);

const Navigation = () => {
    const [activeSection, setActiveSection] = useState<string>(SECTIONS[navItems[0] as keyof Sections]);
    const router = useRouter();

    useEffect(() => {
        const path = navItems.find((key) => SECTIONS[key as keyof Sections] === router.asPath.replace('/', ''));

        if (path) {
            setActiveSection(SECTIONS[path as keyof Sections]);
        }
    }, [router.asPath]);

    return (
        <NavigationWrapper>
            {navItems.map((navItem, index) => (
                <NavItem
                    key={navItem}
                    onClick={(e) => setActiveSection(SECTIONS[navItem as keyof Sections])}
                    isActive={activeSection === SECTIONS[navItem as keyof Sections]}
                >
                    <Link href={`${SECTIONS[navItem as keyof Sections]}`} passHref>
                        <a>
                            <span>0{index + 1}</span> <span className='line'></span> <span>{navItem.toUpperCase()}</span>
                        </a>
                    </Link>
                </NavItem>
            ))}
        </NavigationWrapper>
    );
};

export default Navigation;
