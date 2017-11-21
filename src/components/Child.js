import React, { Component } from 'react';

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }
    render() {
        return (
            <div>Child state: {this.state.value}</div>
        );
    }
}