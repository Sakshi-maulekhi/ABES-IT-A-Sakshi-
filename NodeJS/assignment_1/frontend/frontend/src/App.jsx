import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [fileContent, setFileContent] = useState("");

  const handleCreateFile = async () => {
    try {
      await axios.post("http://localhost:8000/create-file", {
        content: text,
      });
      alert("File Created Successfully!");
      setText("");
    } catch (error) {
      console.error(error);
      alert("Error creating file");
    }
  };

  const handleReadFile = async () => {
    try {
      const res = await axios.get("http://localhost:8000/read-file");
      setFileContent(res.data.content);
    } catch (error) {
      console.error(error);
      alert("Error reading file");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          padding: "20px",
          backgroundColor: "#755d5d",
          color: "white",
          width: "100%",
        }}
      >
        <img src="/logo.png" alt="College Logo" width="60" />
        <h2>ABES Engineering College</h2>
      </header>

      {/* Main Section */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>FS Model for Node</h1>

        <input
          type="text"
          placeholder="Enter file content..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            marginTop: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={handleCreateFile}
            style={{
              padding: "10px 20px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            Create File
          </button>

          <button
            onClick={handleReadFile}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Read File
          </button>
        </div>

        {fileContent && (
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <h3>File Content:</h3>
            <p>{fileContent}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
