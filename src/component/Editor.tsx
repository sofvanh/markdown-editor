import React from 'react';
import * as Remarkable from 'remarkable';

export interface Props {
    // TODO probably add something here
}

interface State {
    text: string
}

export default class Editor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        var something = 1;
        this.md = new Remarkable.Remarkable();
        this.handleChange = this.handleChange.bind(this); // This feels cheaty - from reactjs.org example
        this.state = { text: 'Add your text!' };
    }

    md; // I'm fairly sure this is not the right way to handle properties here

    handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ text: e.target.value })
    }

    getRawMarkup() {
        return { __html: this.md.render(this.state.text) };
    }

    render() {
        return (
            <div>
                <textarea
                    id="markdown-content"
                    onChange={this.handleChange}
                    defaultValue={this.state.text}
                />
                <h3>Output here:</h3>
                <div
                    dangerouslySetInnerHTML={this.getRawMarkup()} 
                />
            </div>
        )
    }
}