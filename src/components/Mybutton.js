import React, { Component } from 'react';

class Mybutton extends Component {
    childUp(){
        this.props.onAdd();
    }
    render() {
        return (
            <div>
                <button style={{ background:'#ccc', padding: 10}} onClick={this.childUp.bind(this)}>
                    My Button Up
                </button>
            </div>
        );
    }
}

export default Mybutton;