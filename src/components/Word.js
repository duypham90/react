import React, { Component } from 'react';

class Word extends Component {
    constructor(props){
        super(props);
        this.toggleMemorized = this.toggleMemorized.bind(this);
    }
    nho(){
        this.setState({
            memorize: !this.props.memorize
        })
    }
    xoa(){
        const { id } = this.props;
        this.props.onRemove(id);
    }
    xoax(id){

    }
    toggleMemorized() {
        const { en, onToggleMemorized } = this.props;
        onToggleMemorized(en);
    }
    render() {
        const { en, vn, id, memorized, onRemove } = this.props;
        const showText = memorized ? '------------' : en;
        const buttonText = memorized ? 'Forgot' : 'Memorized';
        return (
            <div className='container'>
                <h3>{vn}</h3>
                <p>{showText}</p>
                <button onClick={this.toggleMemorized}>{ buttonText }</button>
                <button onClick={this.xoa.bind(this)}>Remove</button>
                <button onClick={() => onRemove(id)}>Xoa</button>

            </div>
        );
    }
}

export default Word;
