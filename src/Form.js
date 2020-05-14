import React from 'react';
import './style/style.css';
import { Form } from 'react-bootstrap';

class FormArea extends React.Component {

    state = { enteredText: '' };

    handleInput = (event) => {
        this.setState({ enteredText: event.target.value })
        this.props.submittedString(this.state.enteredText);
        event.preventDefault();
    }

    render() {
        return (
            <Form>
                <Form.Control as="textarea" rows="4" cols="65"
                    value={this.state.enteredText}
                    spellCheck="false"
                    className="u-full-width custom-form"
                    placeholder="enter text here..."
                    autoFocus
                    onChange={this.handleInput}
                />
            </Form>
        )
    }
}

FormArea.defaultProp = {
    message: 'Add another space at the end...',
    refresh: 'Reload the page...'
}

export default FormArea; 