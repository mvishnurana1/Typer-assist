import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import RandomSentence from './SentenceGenerator';
import './style/style.css';

class App extends React.Component {

    state = {
        randomString: '',
        userEnteredString: ''
    }

    compareString = () => {
        if (this.state.userEnteredString.length === 0) {
            return false;
        }
        else {
            return (this.state.randomString === this.state.userEnteredString);
        }
    }

    getSubmittedString = (input) => {
        this.setState({ userEnteredString: input });
    }

    getRandomSentence = (sentence) => {
        this.setState({ randomString: sentence });
    }

    renderContent = () => {
        if (this.compareString()) {
            return (
                <div>
                    <p>Success!</p>
                    <i class="fa fa-spinner fa-spin" style={{ "font-size": "48px", "color": "red" }}></i>
                </div>
            )
        } else {
            return (
                <div className="row">
                    <RandomSentence newRandomSentence={this.getRandomSentence} />
                    <Form submittedString={this.getSubmittedString} />
                </div>
            )
        }
    }

    render() {
        return (
            <div className="center">
                <div>
                    <div className="row">
                        <div className="eight columns">
                            {this.renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root")); 