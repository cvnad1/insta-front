import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({user, postImage, likes, timestamp}) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerauthor">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user} &#183; <span>{timestamp}</span>
        </div>

        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img 
          src={postImage}
          alt=''
        />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className='postIcon' />
            <ChatBubbleIcon className='postIcon' />
            <TelegramIcon className='postIcon' />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className='postIcon' />
          </div>
        </div>
        <div>liked by {likes} people</div>
      </div>
    </div>

  )
}

export default Post