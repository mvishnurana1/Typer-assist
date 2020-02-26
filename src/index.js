import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import RandomSentence from './SentenceGenerator';
import MessageCard from './MessageCard';
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

    getSubmittedString = (input) => this.setState({ userEnteredString: input });
    getRandomSentence = (sentence) => this.setState({ randomString: sentence });

    renderContent = () => {
        if (this.compareString()) {
            return (
                <div>
                    <MessageCard>
                        <div className="row">
                            <h3> {App.defaultProps.successMessage} </h3>
                            <p>
                                <i class="fa fa-spinner fa-spin" style={{ "font-size": "48px", "color": "red" }} />
                            </p>
                            <img src="https://media2.giphy.com/media/l0ErFafpUCQTQFMSk/giphy.gif" alt="" />
                        </div>
                    </MessageCard>
                </div>
            )
        } else {
            return (
                <div>
                    <RandomSentence newRandomSentence={this.getRandomSentence} />
                    <Form submittedString={this.getSubmittedString} />
                    <MessageCard>
                        {App.defaultProps.message}
                    </MessageCard>
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

App.defaultProps = {
    message: 'Hit extra space button after sentence completion...',
    successMessage: 'Please Reload your browser...'
}

ReactDOM.render(<App />, document.getElementById("root")); 