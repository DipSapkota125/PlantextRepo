import React, { lazy, Suspense, useState } from "react";
import UrlInputForm from "./pages/urlInputForm/UrlInputForm";
import ShortenedUrlDisplay from "./pages/urlInputForm/urlDisplay/ShortenedUrlDisplay";
import QrCodeDisplay from "./pages/qrCodeDisplay/QrCodeDisplay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollTop from "./pages/scrollTop/ScrollTop";
import SkeletonLoading from "./pages/skeletonLoading/SkeletonLoading";
const Home = lazy(() => import("./pages/home/Home.jsx"));

const App = () => {
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleShortenUrl = (url) => {
    setShortenedUrl(url);
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<SkeletonLoading />}>
                <Home />
              </Suspense>
            }
          />
        </Routes>

        <ScrollTop />
        <Footer />
      </Router>
    </>
    // <div className="container mx-auto p-4 text-center">
    //   <h1 className="text-2xl font-bold mb-4">URL Shortener</h1>
    //   <UrlInputForm onShortenUrl={handleShortenUrl} />
    //   {ShortenedUrlDisplay && (
    //     <ShortenedUrlDisplay shortenedUrl={shortenedUrl} />
    //   )}
    //   {shortenedUrl && <QrCodeDisplay url={shortenedUrl} />}
    // </div>
  );
};

export default App;
