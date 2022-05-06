import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { BreadCrumbStyled } from './styles';
import Link from 'next/link';

const BreadCrumb = () => {
    const router = useRouter();

    const currentRoute = router.asPath;
    const crumbs = currentRoute.split('/');

    const getHref = (path: string, crumbs: string[], position: number): string => {
        return crumbs.slice(0, position).join('/') || '/';
    };

    return (
        <BreadCrumbStyled>
            {crumbs.map((path, index) => {
                if (!path) {
                    return (
                        <Link href={getHref(path, crumbs, index + 1)} key={path + index}>
                            <a>
                                <Image src='/assets/logo.png' alt='Picture of the author' width={50} height={50} />
                            </a>
                        </Link>
                    );
                }

                return (
                    <React.Fragment key={path + index}>
                        <span>&#60;</span>
                        <Link href={getHref(path, crumbs, index + 1)}>
                            <a>{path.replace('-', ' ')}</a>
                        </Link>
                    </React.Fragment>
                );
            })}
        </BreadCrumbStyled>
    );
};

export default BreadCrumb;
