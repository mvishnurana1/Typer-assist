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
    randomWordCount = () => {
        let number = Math.floor(Math.random() * 10 + 6);
        return number;
    }

    /**
     * the functions gets a random number 
     * and generates a sentence of the 
     * same sentence using the randomSentence 
     * API
     */
    getRandomSentence = () => {
        let count = this.randomWordCount();
        return randomSentence({ words: count });
    }

    updateState = () => {
        const newSentence = this.getRandomSentence();
        this.setState({ sentence: newSentence });
    }

    handleChage = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            < form onChange={this.handleChage} >
                <h3>{this.state.sentence}</h3>
            </form >
        )
    }
}

export default SentenceGenerator; 
