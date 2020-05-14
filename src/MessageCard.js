import React from 'react';

class MessageCard extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                {this.props.children}
            </div>
        )
    }
}

export default MessageCard; 