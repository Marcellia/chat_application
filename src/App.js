import { ChatEngine } from "react-chat-engine";
import './App.css'
import ChatFeed from "./components/ChatFeed";

import React from 'react';

function App() {
  return ( <ChatEngine
  height = "100vh"
  projectID="3ffc7686-34a7-4403-8e9e-a504c3f5a92f"
  userName="azaveri"
  userSecret="123123"
  renderChatFeed= {(chatAppProps)=> <ChatFeed {... chatAppProps}/>}
 />

);
  } 

export default App;
