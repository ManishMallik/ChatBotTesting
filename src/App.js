import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import SirFloppington from './components/sir-floppington.png';

import config from "./configs/chatbotConfig";
import MessageParser from "./chatbot/MessageParser.js";
import ActionProvider from "./chatbot/ActionProvider.js";

function App() {

  const [openChatbot, setOpenChatbot] = useState(false);

  const toggleChat = () => {
    setOpenChatbot(!openChatbot);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className='rightside'>
          {openChatbot ? (
                <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />
            ) : (
              null
            )  
          }
        </div>
        <div className='circle' onClick={toggleChat}>
          {/* <p class="text">Chatbot</p> */}
          <img src={SirFloppington} className="floppington" alt="logo" />
        </div>
      </header>
      <div style={{padding: '100px'}}>
      </div>
    </div>
  );
}
//style={{ circle: { display: "flex", width: "100px", height: "100px", backgroundColor: "green", borderRadius: "50%",}, }}
export default App;
