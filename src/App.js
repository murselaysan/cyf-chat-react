import React from 'react';
import Header from "./Header"
import CreateMessage from "./CreateMessage"
import MyForm from "./MyForm"

import './App.css';


function App() {
//  const[newMessage,setNewMessage] = useState
  return (
    <div className="App">
    <Header />
    <CreateMessage />
    <MyForm />
   
    </div>
  );
}

export default App;
