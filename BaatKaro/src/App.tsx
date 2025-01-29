import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState(["hi there", "hello"]);
  const wsRef = useRef();
  const inputRef = useRef();
  

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080"); // Use 'ws' instead of 'http'
    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data]);
    };
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }));
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className='h-screen bg-black text-white'>
      {/* Title Heading */}
      <div className='text-center py-6'>
        <h1 className='text-5xl font-bold text-purple-600 font-mono'>Baat Karo!!</h1>
      </div>

      {/* Chat Messages */}
      <div className='h-[70vh] overflow-y-auto px-4'>
        {messages.map((message, index) => (
          <div key={index} className='m-4'>
            <span className='bg-purple-600 text-white rounded-lg p-3 inline-block max-w-[80%] break-words'>
              {message}
            </span>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className='fixed bottom-0 w-full bg-white flex p-4'>
        <input
          ref={inputRef}
          id="message"
          className="flex-1 p-3 rounded-l-lg border border-purple-600 focus:outline-none text-black"
          placeholder="Type your message..."
        />
        <button
          onClick={() => {
            const message = inputRef.current?.value;
            if (message) {
              wsRef.current.send(JSON.stringify({
                type: "chat",
                payload: {
                  message: message
                }
              }));
              inputRef.current.value = ''; // Clear input after sending
            }
          }}
          className='bg-purple-600 text-white p-3 rounded-r-lg hover:bg-purple-700 transition-colors'
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;