import React, { useState } from 'react';
import './App.css';


const ChatMessage = ({ text, sender }) => (
  <div className={`chat-message ${sender.toLowerCase()}`}>
    <span className="message-sender">{sender}: </span>
    <span className="message-text">{text}</span>
  </div>
);
const ChatbotUI = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const sendMessage = async () => {
    if (userInput.trim() === '') return;
    setMessages((prevMessages) => [...prevMessages, { text: userInput, sender: 'user' }]);
    setUserInput('');

    try {
      // Send user input to the Python chatbot backend
      const response = await fetch('http://127.0.0.1:5000/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: userInput }), // Send user input in a 'user_input' field
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from the chatbot backend.');
      }

      const data = await response.json();

      // Receive and display chatbot response
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.bot_response, sender: 'chatbot' }, // Use 'bot_response' field instead of 'response'
      ]);
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };

  return (
    <div className="chatbot-container">
  <div className="chatbot-header">TranquilTalk</div>
  <div className="chatbot-messages" id="chatbot-messages">
    {messages.map((message, index) => (
      <ChatMessage key={index} text={message.text} sender={message.sender} />
    ))}
  </div>
  <div className="chatbot-input">
    <input
      type="text"
      placeholder="Type your message..."
      value={userInput}
      onChange={handleUserInput}
    />
    <button onClick={sendMessage}>Send</button>
  </div>
</div>


  );
};

export default ChatbotUI;
