import React, { Component } from 'react';

export default class Box extends Component {
    constructor(props){
        super(props);
        this.state = { value: 50 };
        this.up = this.up.bind(this);
        this.down =  this.down.bind(this);
    }
    up(){
        this.setState({
            value: this.state.value +1,
        })
    }
    down(){
        this.setState({
            value: this.state.value - 1,
        })
    }
    render() {
        const { value } = this.state;
        const color = value % 2 === 0 ? 'red' : 'green'; 
        return (
            <div className='box'>
                <p style={{color}}>Value: { this.state.value }</p>
                <button onClick={() => console.log('ok')}>Up</button>
                <button onClick={this.down}>Down</button>
            </div>
        );
    }
}
