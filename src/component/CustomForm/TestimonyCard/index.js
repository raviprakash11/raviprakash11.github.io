import React from "react";
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import "./TestimonyCard.scss";
import { Avatar } from "@mui/material";

export default function TestimonyCard({quoteSaid, capsName, userName, job}) {
  return (
    <>
      <div className="container">
        <div className="testimonial-box">
          <div className="testimonial">
            <span className="testimonial-text">
            <FormatQuoteIcon/>
              {quoteSaid}
            </span>
            <div className="testimonial-user">
              {/* <img
                src="https://randomuser.me/api/portraits/women/17.jpg"
                alt="user-img"
                className="user-img"
              /> */}
              <Avatar sx={{justify:'center', height:'54px', width:'54px', color:'#f2f2f2', backgroundColor:'#121212'}}>{capsName}</Avatar>
              <div className="user-info">
                <span className="user-name">{userName}</span>
                <div className="user-job-details">
                  <span className="user-job">{job}</span>
                  {/* <div className="line"></div>
                  <span className="user-post">{post}</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="support">
        <a href="https://twitter.com/DevLoop01" target="_blank">
          <TwitterIcon/>
        </a>
        <a href="https://codepen.io/dev_loop/" target="_blank">
          <LinkedInIcon/>
        </a>
      </div> */}
    </>
  );
}
