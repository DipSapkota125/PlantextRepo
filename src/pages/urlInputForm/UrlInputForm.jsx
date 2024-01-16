// src/components/UrlInputForm.jsx
import React, { useState } from "react";
import { shortenUrl } from "../apiService/ApiService";

const UrlInputForm = ({ onShortenUrl }) => {
  const [url, setUrl] = useState("");

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleShortenClick = async () => {
    try {
      const shortenedUrl = await shortenUrl(url);
      onShortenUrl(shortenedUrl);
    } catch (error) {
      console.error("Error shortening URL:", error.message);
    }
  };

  return (
    <div className="my-4">
      <input
        type="text"
        value={url}
        onChange={handleInputChange}
        className="border p-2 w-64"
        placeholder="Enter URL"
      />
      <button
        onClick={handleShortenClick}
        className="ml-2 bg-blue-500 text-white p-2"
      >
        Shorten URL
      </button>
    </div>
  );
};

export default UrlInputForm;
