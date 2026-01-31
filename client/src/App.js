import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const App = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", text: input };
    const newChat = [...chat, userMessage];

    setChat(newChat);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:4005/chat", {
        message: input
      });

      setChat([
        ...newChat,
        { role: "bot", text: res.data.reply }
      ]);
    } catch (error) {
      console.error("Error:", error);
      setChat([
        ...newChat,
        { role: "bot", text: "⚠️ Error getting response from server." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div
        className="border rounded d-flex flex-column"
        style={{ width: "100%", maxWidth: "500px", height: "500px" }}
      >
        {/* Header */}
        <div className="p-2 text-center fw-bold border-bottom">
          AI Chat (Gemini)
        </div>

        {/* Chat Area */}
        <div className="p-3 flex-grow-1 overflow-auto">
          {chat.length === 0 && (
            <p className="text-muted text-center">
              Say something...
            </p>
          )}

          {chat.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 ${
                msg.role === "user" ? "text-end" : "text-start"
              }`}
            >
              <div
                className={`d-inline-block px-3 py-2 rounded ${
                  msg.role === "user"
                    ? "bg-primary text-white"
                    : "bg-light text-dark border"
                }`}
                style={{ maxWidth: "100%", fontSize: "14px" }}
              >
                {msg.role === "bot" ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.text}
                  </ReactMarkdown>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}

          {/* Auto-scroll anchor */}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="p-2 border-top">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder={
                loading ? "Thinking..." : "Type message..."
              }
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={loading}
            />
            <button
              className="btn btn-primary"
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
