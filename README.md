# ChatApp - Real-Time Messaging

A simple chat application built using ReactJS and WebSockets to demonstrate real-time communication.

## 🚀 Features
- **Real-Time Messaging**: Instant communication with WebSockets.
- **Message History**: View previous messages in the chat.
- **User Authentication**: Secure login for users to access their chat rooms.

## 🛠️ Tech Stack
- **Frontend**: ReactJS for building the user interface.
- **State Management**: React Context API for managing the app state.
- **WebSockets**: For real-time messaging functionality.
- **Backend**: Node.js with WebSocket server to handle message broadcasting.
- **Database**: No database used (for learning purposes).

## 📌 Why WebSockets?
WebSockets provide a persistent, full-duplex connection between the client and server, allowing messages to be sent in real time without needing to poll the server constantly. This is perfect for building interactive real-time applications like chat apps.

With WebSockets, our chat app allows for instant message delivery with low latency.

## 📦 Installation
### Prerequisites
✔️ Ensure Node.js is installed on your machine.  
✔️ Install VS Code for easy development and debugging.  
✔️ Install necessary VS Code extensions (e.g., ESLint, Prettier).

### Setup
1️⃣ Clone the repository:
```bash
git clone https://github.com/i-ayushh18/ChatApp.git
cd ChatApp

Install dependencies:
npm install

3️⃣ Set up the backend WebSocket server:
```sh

cd ../Broadcast-ChatApp
npm install
npm run dev
```

4️⃣ Set up the frontend React app:
```sh
cd ../BaatKaro
npm install
npm run dev
```

## 📌 Usage
📝 Join a chat room and start sending messages instantly.
💬 View real-time messages from other users.


🚀 Contributions are welcome! Feel free to fork the repository and submit pull requests.
