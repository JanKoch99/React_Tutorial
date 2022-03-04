import React, {Component} from "react";

class Message extends Component {

    constructor() {
        super();
        this.state={
            message: 'Welcome visitor',
            subscribed: 'Subscribe'
        }
    }

    changeMessage () {
        this.setState({
            message: 'Thank you for subscribing',
            subscribed: 'Unsubscribe'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>{this.state.subscribed}</button>
            </div>
        )
    }
}

export default Message;