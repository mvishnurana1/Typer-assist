import React from 'react';
import randomSentence from 'random-sentence';

class SentenceGenerator extends React.Component {

    state = { sentence: '' }

    componentWillMount = () => {
        let ranSentence = this.getRandomSentence();
        this.setState({ sentence: ranSentence });
    }

    componentDidMount = () => this.props.newRandomSentence(this.state.sentence);

    /**
     * The functions generates a random number 
     */
    randomWordCount = () => Math.floor(Math.random() * 10 + 6);

    /**
     * the functions gets a random number 
     * and generates a sentence of the 
     * same sentence using the randomSentence 
     * API
     */
    getRandomSentence = () => randomSentence({ words: this.randomWordCount() });

    handleChage = (event) => event.preventDefault();
    tryOnCopy = (event) => event.preventDefault();

    render() {
        return (
            <div onChange={this.handleChage} >
                <h1 onCopy={this.tryOnCopy} >{this.state.sentence}</h1>
            </div>
        )
    }
}

export default SentenceGenerator; 
