import React, { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const res = await axios.post("http://localhost:3001/ask-ai", { userMessage: input });
      setResponse(res.data.aiResponse);
    } catch (error) {
      console.error(error);
      setResponse("Error fetching AI response.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Chat with AI</h1>
      <textarea
        rows="4"
        cols="50"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={sendMessage}>Ask AI</button>
      <h2>Response:</h2>
      <p>{response}</p>
    </div>
  );
}

export default App;