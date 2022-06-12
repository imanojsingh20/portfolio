import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { BreadCrumbStyled } from './styles';
import Link from 'next/link';

const BreadCrumb = () => {
    const [collapsed, setCollapsed] = useState(true);
    const router = useRouter();

    const currentRoute = router.asPath;
    const crumbs = currentRoute.split('/');

    const toggleCollapse = () => {
        setCollapsed((prevState) => !prevState);
    };

    const getHref = (path: string, crumbs: string[], position: number): string => {
        return crumbs.slice(0, position).join('/') || '/';
    };

    const breadCrumbElements = crumbs.map((path, index) => {
        if (!path) {
            return (
                <li key={path + index}>
                    <Link href={getHref(path, crumbs, index + 1)}>
                        <a>
                            <Image src='/assets/logo.png' alt='Picture of the author' width={50} height={50} />
                        </a>
                    </Link>
                </li>
            );
        }

        return (
            <React.Fragment key={path + index}>
                <span>&#60;</span>
                <li>
                    <Link href={getHref(path, crumbs, index + 1)}>
                        <a>{path.replace(/-/g, ' ')}</a>
                    </Link>
                </li>
            </React.Fragment>
        );
    });

    const middleElement = (
        <React.Fragment key='collapse'>
            <span>&#60;</span>
            <li className='collapsed'>
                <span onClick={toggleCollapse}>...</span>
            </li>
        </React.Fragment>
    );

    const collapedVersion = [breadCrumbElements[0], middleElement, breadCrumbElements[breadCrumbElements.length - 1]];

    return <BreadCrumbStyled>{collapsed ? collapedVersion : breadCrumbElements}</BreadCrumbStyled>;
};

export default BreadCrumb;
