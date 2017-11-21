import React, { Component } from 'react';
import Mybutton from './Mybutton';
class SimpleBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.up = this.up.bind(this);
    }
    up(){
        this.setState((preState)=> ({ value: preState.value + 1 }))
    }
    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <button className='css-btn' onClick={this.up}>Up</button>
                <Mybutton onAdd={this.up}></Mybutton>
            </div>
        );
    }
}

export default SimpleBox;