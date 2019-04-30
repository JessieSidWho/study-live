import React, { Component } from "react";
import Navbar from './components/Navbar';
import PagesContainer from "./components/PagesContainer";
import { socket } from './sockets/client';
import './index.css';
import "./App.css";

class App extends Component {
    
    state = {
        message: ""
    }

    constructor(props) {
        super(props);

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleMessageSubmit = this.handleMessageSubmit.bind(this);

        socket.on('chat message', msg => {
            const p = document.createElement("p");
            p.append(msg);
            document.getElementById("chat").append(p);
            this.scrollChatIfAtBottom();
        });

        socket.on('user count', count => {
            const userCount = document.getElementById("user-count");

            let message = (count === 1) ?
                `${count} person is listening to study-live (that's you!)` :
                `${count} people are listening to study-live`;
            
            userCount.innerText = message;
        })
    }

    handleMessageSubmit(event) {
        event.preventDefault();
        console.log(`message: ${this.state.message}`);
        socket.emit('chat message', this.state.message);
        this.setState({ message: "" });
        this.scrollChatIfAtBottom();
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }

    scrollChatIfAtBottom() {
        const chat = document.getElementById("chat");
        let isScrolledToBottom = chat.scrollHeight - chat.clientHeight <= chat.scrollTop + 50;
        if(isScrolledToBottom) chat.scrollTop = chat.scrollHeight - chat.clientHeight;
    }

    render() { 
        return (
            <>
                <Navbar />
                <div className="row">
                    <div className="col-md-8">
                        <PagesContainer />
                    </div>
                    <div className="col-md-4 border border-dark">

                        <div id="user-count"></div>
                    
                        <div id="chat" >
                            <p>
                                Study Live: Hello
                            </p>
                        </div>
                        <div className="row border border-dark">
                            <form onSubmit={this.handleMessageSubmit}>
                                <label>send message</label>
                                <input
                                    type="text"
                                    value={ this.state.message }
                                    onChange = { this.handleMessageChange }
                                    name="message" />
                                <input
                                    type="submit"
                                    value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
 
export default App;