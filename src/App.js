import React, {Component} from "react";
import PagesContainer from "./components/PagesContainer";
import { subscribeToTimer, socket } from './sockets/client';
import "./App.css";

class App extends Component {
    
    state = {
        timestamp: "no timestamp yet",
        message: ""
    }

    constructor(props) {
        super(props);

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleMessageSubmit = this.handleMessageSubmit.bind(this);

        subscribeToTimer((error, timestamp) => this.setState({
            timestamp
        }));

        socket.on('chat message', msg => {
            console.log(msg);

            const p = document.createElement("p");
            p.append(msg);
            document.getElementById("chat").append(p);
        });
    }

    handleMessageSubmit(event) {
        event.preventDefault();
        console.log(`message: ${this.state.message}`);
        socket.emit('chat message', this.state.message);

        this.setState({ message: "" });
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }

    componentDidMount() {
        const chat = document.getElementById("chat");

        setInterval(function() {
            let isScrolledToBottom = chat.scrollHeight - chat.clientHeight <= chat.scrollTop + 100;
            if(isScrolledToBottom) chat.scrollTop = chat.scrollHeight - chat.clientHeight;
        }, 250);
    }

    render() { 
        return (
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <PagesContainer />
                    </div>
                    <div className="col-md-4 border border-dark">
                        <div id="chat">
                        <p>
                            Study Live: Hello
                        </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 offset-md-8 border border-dark">
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
        )
    }
}
 
export default App;