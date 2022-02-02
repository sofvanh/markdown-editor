import React from 'react';
import Preview from './Preview';
import Input from './Input';
import Buttons from './Buttons';
import './Editor.css';

export interface Props {
    // TODO probably add something here
}

interface State {
    text: string
}

export default class Editor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleChange = this.handleChange.bind(this); // TODO are we sure this is optimal?
        this.state = { text: 'Markdown renders here!' };
    }

    handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <div className="flex-container">
                <div className="column">
                    <Input onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="buttonColumn">
                    <Buttons />
                </div>
                <div className="column">
                    <Preview text={this.state.text} />
                </div>
            </div>
        )
    }
}