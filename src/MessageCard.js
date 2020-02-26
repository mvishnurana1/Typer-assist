import React from 'react';

class MessageCard extends React.Component {
    render() {
        return (
            <div className="message">
                {this.props.children}
            </div>
        )
    }
}

export default MessageCard; 