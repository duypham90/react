import React, { Component } from 'react';
import Word  from './Word';
import WordForm from './WordForm';
import WordFilter from './WordFilter';
class NewWord{
    constructor(en, vn, memorized){
        this.en = en;
        this.vn = vn;
        this.memorized = memorized;
    }
}
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrWords: [
                new NewWord('Hello','Xin Chao', true),
                new NewWord('Google Bye', 'Tam Biet',false),
                new NewWord('EN', 'VN', false),
            ],
            filterStatus: 'SHOW_ALL'
        }
        this.onaddWord = this.onaddWord.bind(this);
        this.addWord = this.addWord.bind(this);
        this.remove = this.remove.bind(this);
        this.toggleMemorized = this.toggleMemorized.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
    }
    onaddWord(){
        const en = this.refs.txten.value;
        const vn = this.refs.txtvn.value;
        const newW =  new NewWord(en,vn);
        console.log(newW);
        this.setState({
            arrWords: [newW].concat(this.state.arrWords)
        })
    }
    addWord(textEn, textVn){
        const newWord = new NewWord(textEn, textVn);
        this.setState({
            arrWords: [newWord].concat(this.state.arrWords)
        })
    }
    remove(id){
        //const Word = arrWords.splice(id, 1);
        this.setState(
            (preState) => ({ arrWords: preState.arrWords.filter((e,i) => i !== id)})
        );
    }
    toggleMemorized(en) {
        this.setState(
            preState => {
                const newWords = preState.arrWords.map((e, i) => {
                    if(e.en !== en) return e;
                    return { ...e, memorized: !e.memorized};
                });
                console.log(newWords);
                return {arrWords: newWords};
            }
        )
    }
    changeFilter(text){
         this.setState({ filterStatus: text });
    }
    render() {
        const { arrWords, filterStatus } = this.state;
        const arrWordsFilter = arrWords.filter(e => {
            if(filterStatus === 'SHOW_FORGET') return !e.memorized;
            if(filterStatus === 'SHOW_MEMORIZE') return e.memorized;
            return true;
        });
        return (
            <div>
                <WordFilter filterStatus={filterStatus} onChangeFilter={this.changeFilter} />
                {arrWordsFilter.map((e, index) => 
                    <Word en={e.en} vn={e.vn} key={index} id={index} memorized={e.memorized} 
                    onRemove={this.remove}
                    onToggleMemorized={this.toggleMemorized}
                    />)
                }
            </div>
        );
    }
}

export default List;