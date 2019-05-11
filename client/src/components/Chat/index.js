import React, { Component } from 'react';
import axios from 'axios';
import { subscribeToTimer, socket } from './sockets';
import './chat.css';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';


class Chat extends Component {
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
        
        socket.emit('chat message', `${this.props.auth.name}: ${this.state.message}`);

        const data = {
            username: this.props.auth.name,
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

    postChatMessage(data) {
        axios.post(`/chat/save`, {
                username: data.username,
                message: data.message,
                timestamp: data.timestamp
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    getChatMessages() {
        return (
            axios.get(`/chat`)
            .then(data => {
                return data;
            })
            .catch(error => {
                return error;
            })
        )
    }

    async componentDidMount() {
        const res = await this.getChatMessages();
        const chat = await res.data.chat;

        for(let i in chat) {

            const chatdiv = document.getElementById("chat");
            const p = document.createElement("p");

            p.innerText = `${chat[i].username}: ${chat[i].message}`;

            chatdiv.append(p);
        }

        const chatWindow = document.getElementById("chat");
        chatWindow.scrollTop = chatWindow.scrollHeight - chatWindow.clientHeight;
    }

    render() { 
        return (
            <>
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
            </>
        );
    }
}
 
function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { fetchUser })(Chat);