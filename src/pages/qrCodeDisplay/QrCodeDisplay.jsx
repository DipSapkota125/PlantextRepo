// src/components/QrCodeDisplay.jsx
import React from "react";
import QRCode from "react-qr-code";

const QrCodeDisplay = ({ url }) => {
  return (
    <div className="my-4">
      <p className="font-bold">QR Code:</p>
      <QRCode value={url} />
    </div>
  );
};

export default QrCodeDisplay;
