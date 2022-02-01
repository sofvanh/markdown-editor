import React from 'react';
import * as Remarkable from 'remarkable';
import './Preview.css';

export interface Props {
    text: string
}

function Preview({ text }: Props) {
    return (
        <div
            className="preview"
            dangerouslySetInnerHTML={getRawMarkup(text)}
        />
    );
}

export default Preview;

function getRawMarkup(text: string) {
    var md = new Remarkable.Remarkable(); // TODO do this better
    return { __html: md.render(text) };
}