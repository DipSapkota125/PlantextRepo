export const shortenUrl = async (longUrl) => {
  const apiKey = "YOUR_BITLY_API_KEY";
  const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      long_url: longUrl,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    return data.id;
  } else {
    throw new Error(data.description || "Failed to shorten URL");
  }
};
