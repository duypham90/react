import React, { Component } from 'react';

class WordForm extends Component {
    addnew(){
        // const en = this.refs.txten.value;
        // const vn = this.refs.txtvn.value;
        const { txten, txtvn } = this.refs;
        this.props.onAddNew(txten.value, txtvn.value);
    }
    render() {
        return (
            <div>
                <input type="text" name="txten" placeholder="enter englisht meaing" ref='txten'/>
                <br /><b/>
                <input type="text" name="txtvn" placeholder="enter vietnamemed meaing"  ref='txtvn'/>
                <button onClick={this.addnew.bind(this)}>Add</button>
            </div>
        );
    }
}

export default WordForm;