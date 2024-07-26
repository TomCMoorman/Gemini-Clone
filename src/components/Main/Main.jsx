import React, { useContext } from "react";
import pic from "../../assets/user-img.jpg";
import geminiPic from "../../assets/gemini.jpg";
import "./Main.css";
import ExploreIcon from "@mui/icons-material/Explore";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={pic} alt="Profile Picture" style={{ maxWidth: 150 }}></img>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Human.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Build your own Generative AI App using Google Gemini API with
                  React JS
                </p>
                <ExploreIcon />
              </div>
              <div className="card">
                <p>
                  In this tutorial you will learn to create your own Generative
                  AI
                </p>
                <LightbulbOutlinedIcon />
              </div>
              <div className="card">
                <p>Build your own version of Google Gemini App and share</p>
                <MessageOutlinedIcon />
              </div>
              <div className="card">
                <p>Upload this Gemini clone project online using Vercel</p>
                <CodeOffOutlinedIcon />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={pic} alt="Profile Picture" style={{ maxWidth: 50 }} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={geminiPic} alt="Gemini Profile Pic" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter Prompt"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <CollectionsOutlinedIcon />
              <MicNoneOutlinedIcon />
              <SendOutlinedIcon onClick={() => onSent()} />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
