import React from "react";
import './cardHoverStyle.scss';

export default function CardHoverEffect() {
  return (
    <>
    <div>
      <div className="note">
        Based on this{" "}
        <a href="https://dribbble.com/shots/3127773-Event-Card" target="_blank">
          dribbble
        </a>
      </div>
      <article className="card">
        <div className="thumb"></div>
        <div className="infos">
          <h2 className="title">
            new york city<span className="flag"></span>
          </h2>
          <h3 className="date">november 2 - 4</h3>
          <h3 className="seats">seats remaining: 2</h3>
          <p className="txt">
            Join us for our Live Infinity Session in beautiful New York City.
            This is a 3 day intensive workshop where you'll learn how to become
            a better version of...
          </p>
          <h3 className="details">event details</h3>
        </div>
      </article>
    </div>

    <div>
      <div className="note">
        Based on this{" "}
        <a href="https://dribbble.com/shots/3127773-Event-Card" target="_blank">
          dribbble
        </a>
      </div>
      <article className="card">
        <div className="thumb"></div>
        <div className="infos">
          <h2 className="title">
            new york city<span className="flag"></span>
          </h2>
          <h3 className="date">november 2 - 4</h3>
          <h3 className="seats">seats remaining: 2</h3>
          <p className="txt">
            Join us for our Live Infinity Session in beautiful New York City.
            This is a 3 day intensive workshop where you'll learn how to become
            a better version of...
          </p>
          <h3 className="details">event details</h3>
        </div>
      </article>
    </div>
    </>
  );
}
