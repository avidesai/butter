import React, { useState } from 'react';
import './SocialFeed.css';

const SocialFeed = () => {
  const [comments, setComments] = useState([
    { username: 'Bear 🐻', text: 'Wow. I just won big on that last bet!' },
    { username: 'Fox 🦊', text: 'How can people think the NFL isn\'t rigged??' },
    { username: 'Dog 🐶', text: 'The grammy\'s bet is a no brainer. I pick Rihanna.' },
    { username: 'Cat 🐱', text: 'My money is on Bernie 2024. #Yolo.' }
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, { username: 'You', text: inputValue }]);
    setInputValue('');
  };

  return (
    <div className="social-feed-container">
      {comments.map((comment, index) => (
        <div key={index} className="social-feed-comment">
          <p>
            <span className="social-feed-username">{comment.username}:</span><span className="social-feed-text">{comment.text}</span>
          </p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="social-feed-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="social-feed-input"
        />
        <button type="submit" className="social-feed-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default SocialFeed;
