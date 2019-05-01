import React, { Component } from "react";
import Navbar from './components/Navbar';
import PagesContainer from "./components/PagesContainer";
import './index.css';

// chat api dependencies
import axios from 'axios';
import { subscribeToTimer, socket } from './sockets/client';
import "./App.css";

class App extends Component {
    
    state = {
        timestamp: 'no timestamp yet',
        message: ""
    }

    constructor(props) {
        super(props);

        subscribeToTimer((error, timestamp) => this.setState({
            timestamp
        }));

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

    async handleMessageSubmit(event) {
        event.preventDefault();
        console.log(`message: ${this.state.message}`);
        socket.emit('chat message', this.state.message);

        const data = {
            username: "anonymoous",
            message: this.state.message,
            timestamp: this.state.timestamp
        }

        await this.postChatMessage(data);

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

    postChatMessage(body) {
        console.log('Posting chat message to database');
        console.log(body);

        axios.post(
            'http://localhost:8001/chat/save',
            { body,
              headers: {'Access-Control-Allow-Origin': '*'} })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() { 
        return (
            <>
                <Navbar />
                <div className="row">
                    <div className="col-md-8 border-bottom-0 border-light bg-dark text-white">
                        <PagesContainer />
                    </div>

                    <div className="col-md-4 border border-light bg-dark text-white rounded-lg">

                        <div id="user-count" className="row border-bottom border-light rounded-lg pt-2 pl-4">STUDY LIVE CHAT</div>

                        <div id="chat" className="col-sm-12 pt-3" >
                            <p>
                                Study Live: Hello
                            </p>
                        </div>

                        <div className="row">
                            <form className="col-sm-12" onSubmit={this.handleMessageSubmit}>
                                <input
                                    id="msgbox" 
                                    className="rounded-lg"                                   
                                    type="text"
                                    value={ this.state.message }
                                    onChange = { this.handleMessageChange }
                                    placeholder="Your Message Here"
                                    name="message" />
                                <input
                                    id="sendbtn"
                                    className="btn btn-light text-dark"
                                    type="submit"
                                    value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
 
export default App;