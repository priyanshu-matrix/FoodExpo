import React, { useState } from "react";
import axios from "axios";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const clearOnClick = () => {
    setResponse("");
  };

  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const sendMessage = async () => {
    try {
      const res = await axios.post("http://localhost:3001/ask-ai", {
        userMessage: input,
      });
      setResponse(res.data.aiResponse);
    } catch (error) {
      console.error(error);
      setResponse("Error fetching AI response.");
    }
  };

  return (
    <>
      <header
        style={{
          backgroundColor: "black",
          height: "100vh",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 id="header">FoodExpo</h1>
        <Parallax pages={3}>
          <ParallaxLayer offset={0} speed={0.05} factor={1}>
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundImage: `linear-gradient(to top, 
                  rgba(0,0,0,1) 0%,
                  rgba(0,0,0,0.7) 30%,
                  rgba(0,0,0,0) 100%),
                  url('/fruit.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  paddingTop: "40vh",
                  color: "white",
                  fontSize: "100px",
                }}
              >
                Welcome to FoodExpo
              </h1>
              <div className="container">
                <p>
                  Embark on a culinary journey that adapts to your mood and
                  cultural cravings. Discover authentic dishes from around the
                  world, from comforting street food to elegant fine dining
                  experiences. Whether you're seeking the spicy flavors of Asia,
                  the hearty traditions of Europe, or the vibrant tastes of
                  Latin America, let us guide you to the perfect meal that
                  matches your current state of mind and cultural preferences.
                </p>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.3} factor={4}>
            <div
              style={{
                height: "100vh",
                width: "100%",
                background: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="container">
                <h3 style={{ textAlign: "center", paddingTop: "40vh" }}>
                  Tell us how you feel, and let AI guide your culinary journey.
                  Whether you're stressed, happy, energetic, or seeking comfort,
                  we'll suggest the perfect dishes to complement your mood and
                  satisfy your cravings.
                </h3>
              </div>
              <div className="container my-5">
                <div
                  id="chat"
                  style={{ textAlign: "center", marginTop: "20px" }}
                >
                  <h1 style={{ color: "white" }}><b>Mistral-7B-Instruct-v0.2</b></h1>
                  <textarea
                    rows="3"
                    cols="50"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{
                      minHeight: "9em",
                      maxHeight: "15em",
                      overflowY: "auto",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  />
                  <br />
                  <button
                    className="btn btn-outline-light my-3"
                    onClick={sendMessage}
                  >
                    Ask AI
                  </button>
                </div>
                <div>
                  <style>
                    {`
                body {
                  overflow-y: scroll;
                  }
                  `}
                  </style>
                  <div className="mx- my-2">
                    <div
                      className="card mx-auto"
                      style={{
                        transition: "height 0.5s ease, opacity 0.5s ease",
                        height: isExpanded ? "300px" : "200px",
                        width: "400px",
                        border: "1px solid white",
                        overflow: isExpanded ? "auto" : "hidden",
                        opacity: isExpanded ? 1 : 0.65,
                        position: "relative",
                        zIndex: isExpanded ? 1 : "auto",
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="card-body">
                        {<p className="card-text">{response}</p>}
                      </div>
                      <button
                        id="btn"
                        className="btn btn-dark mx-2"
                        onClick={clearOnClick}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={2} factor={1}>
            <div
              style={{
                height: "100vh",
                width: "100%",
                background: "lightpink",
                backgroundImage: "linear-gradient(to bottom, black, grey)",
              }}
            >
              <h3 style={{ textAlign: "center", paddingTop: "40vh" }}>
                <>
                  <div style={{ color: 'white', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
                    <h3><u>About the Developer</u></h3>
                    <p>Priyanshu Kumar Pandey</p>
                    <p>This project is licensed under the MIT License</p>
                    <p>For queries: <a href="mailto:priyanshupandey44449@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>Contact Me</a></p>
                  </div>
                </>
              </h3>
            </div>
            <footer
              style={{
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
                padding: "50px",
                position: "fixed",
                bottom: 0,
                width: "100%",
              }}
            >
              <p>© 2024 FoodExpo. All rights reserved.</p>
            </footer>
          </ParallaxLayer>
        </Parallax>
      </header>
    </>
  );
}

export default App;
