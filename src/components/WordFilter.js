import React, { Component } from 'react';
class WordFilter extends Component {

    render() {
        const { onChangeFilter, filterStatus } = this.props;
        const getName = (classcss) => {
            const style = classcss === filterStatus ? 'active' : '';
            return style;
        }
        const Mybutton = ({status}) => (
             <button className={getName(status)} onClick={() => onChangeFilter(status)}>{status.replace('_',' ')}</button>
        );
        return (
            <div>
                <Mybutton status='SHOW_ALL' />
                <Mybutton status='SHOW_FORGET' />
                <Mybutton status='SHOW_MEMORIZE' />
            </div>
        );
    }
}

export default WordFilter;