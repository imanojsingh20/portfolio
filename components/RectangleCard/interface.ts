import { MouseEvent } from 'react';

export interface IProps {
    title: string;
    desc: string;
    tag: string[];
    link: {
        external: boolean;
        url: string;
    };
    handleHover: (e: any) => void;
    fade: boolean;
}
