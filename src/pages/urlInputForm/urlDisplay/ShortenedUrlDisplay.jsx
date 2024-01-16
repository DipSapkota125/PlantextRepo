// src/components/ShortenedUrlDisplay.jsx
import React from "react";

const ShortenedUrlDisplay = ({ shortenedUrl }) => {
  return (
    <div className="my-4">
      <p className="font-bold">Shortened URL:</p>
      <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
        {shortenedUrl}
      </a>
    </div>
  );
};

export default ShortenedUrlDisplay;
