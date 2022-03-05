import React from 'react';
import { Options } from 'react-markdown';
import CodeBlock from './CodeBlock';
import { ReactMarkdownStyled } from './styles';

const ReactMarkDown = (props: Options) => {
    return <ReactMarkdownStyled {...props} components={{ code: CodeBlock }} />;
};

export default ReactMarkDown;
