import React, { useState } from 'react';
import Suggestions from './Suggestions';
import "./Timeline.css";
import Post from './Posts/Post';

function Timeline() {
  const [Posts, setPosts] = useState([
    {
      user : "Rocky_",
      postImage : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      likes : 200,
      timestamp : "2d",
    },
    {
      user : "Shubam_",
      postImage : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
      likes : 200,
      timestamp : "2w",
    },
    {
      user : "Angel_",
      postImage : "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg",
      likes : 200,
      timestamp : "2min",
    },
  ]);
  return (
    <div className='timeline'>
      <div className='timeline__left'>
        <div className="timeline__posts">
          {Posts.map((post) => (
            <Post user={post.user} 
            postImage={post.postImage} 
            likes={post.likes} 
            timestamp={post.timestamp} />
          ))}
        </div>
      </div>
      <div className='timeline__right'>
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline