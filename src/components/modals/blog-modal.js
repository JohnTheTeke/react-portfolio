import React, { Component } from 'react';

export default class BlogModal extends Component {
    constructor(props) {
    super(props);
    }

    render() {
        return(
            <ReactModal isOpen={true}>
                <h1>Im in a modal!</h1>
            </ReactModal>
        )
    }
}