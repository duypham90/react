import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {
    render() {
        return (
            <div>
                <button 
                    style={{ color: 'green', fontWeight: 'bold' }}
                    onClick={() => {
                        this._child.setState((prevState) => ({ value: prevState.value + 1 }));
                    }}
                >
                    Parent Button
                </button>
                <Child ref={x => this._child = x}/>
            </div>
        );
    }
}