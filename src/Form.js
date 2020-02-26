import React from 'react';
import './style/style.css';

class Form extends React.Component {

    state = { enteredText: '' };

    handleInput = (event) => {
        this.setState({ enteredText: event.target.value })
        this.props.submittedString(this.state.enteredText);
        event.preventDefault();
    }

    render() {
        return (
            <div className="row">
                <form>
                    <textarea
                        value={this.state.enteredText}
                        spellCheck="false"
                        className="u-full-width custom-form"
                        placeholder="enter text here..."
                        autoFocus
                        onChange={this.handleInput}
                    />
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
}

export default Form; 