import React from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import SearchPage from "./components/SearchPage/SearchPage";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/video/:videoId"
            element={
              <div className="app-main">
                <VideoPlayer />
              </div>
            }
          ></Route>
          <Route
            path="/search/:searchQuery"
            element={
              <div className="app-main">
                <SideBar />
                <SearchPage />
              </div>
            }
          ></Route>
          <Route
            path="/"
            element={
              <div className="app-main">
                <SideBar />
                <RecommendedVideos />
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
