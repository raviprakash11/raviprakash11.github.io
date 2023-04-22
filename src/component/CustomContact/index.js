import React from "react";
import './CustomContact.scss';
import { IconButton } from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";

export default function CustomContact({closeRenderForm}) {
  return (
    <div>
      {/* <small>Enter message (optional) and click button "Send"</small> */}
      <IconButton onClick={closeRenderForm}>
        <CloseFullscreen sx={{color:'red'}}/>
      </IconButton>
      <div className="wrapper centered">
        <article className="letter">
        <div className="side">
          <h1>I'd love to hear from you!</h1>
            <p>
              <input type="text" placeholder="Your name" />
            </p>
            <p>
              <input type="email" placeholder="Your email" />
            </p>
            <p>
              <textarea placeholder="Your message"></textarea>
            </p>
            <p>
              <button id="sendLetter">Send</button>
            </p>
          </div>
          <div className="side" />
        </article>
        <div className="envelope front"></div>
        <div className="envelope back"></div>
      </div>
      <p className="result-message centered">Thank you for your message</p>
    </div>
  );
}

// function addclassName() {
//     document.body.classNameList.add("sent");
//   }
  
//   sendLetter.addEventListener("click", addclassName);
