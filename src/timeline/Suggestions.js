import React from 'react';
import { Avatar } from "@mui/material";
import './Suggestions.css';

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">redian_</span>
              <span className="relation">followed by Shubam</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">redian_</span>
              <span className="relation">followed by Shubam</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">redian_</span>
              <span className="relation">followed by Shubam</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">redian_</span>
              <span className="relation">followed by Shubam</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">redian_</span>
              <span className="relation">followed by Shubam</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">redian_</span>
              <span className="relation">followed by Shubam</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Suggestions