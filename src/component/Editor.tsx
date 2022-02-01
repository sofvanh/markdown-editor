import React from 'react';
import Preview from './Preview';

export interface Props {
    // TODO probably add something here
}

interface State {
    text: string
}

export default class Editor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleChange = this.handleChange.bind(this); // This feels cheaty - from reactjs.org example
        this.state = { text: 'Add your text!' };
    }

    handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ text: e.target.value })
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
                <Preview text={this.state.text}/>
            </div>
        )
    }
}