import React from "react";

const Main = () => {
  return (
    <div className="main">
      {/* 메인 영역 */}
      <div className="main-container">
        <div className="bookmark"></div>
        <div className="wrapper">
          <div className="content">
            <div className="write-article-box"></div>
            <div className="content-icons-section">
              <div className="icons-section-icon"></div>
              <div className="icons-section-icon"></div>
              <div className="icons-section-icon"></div>
              <div className="icons-section-icon"></div>
              <div className="icons-section-icon"></div>
              <div className="icons-section-icon"></div>
            </div>
            <div className="article-container">
              {/* <Article />
            <Article />
            <RecomendFriends />
            <Article />
            <Advertisement /> */}
            </div>
          </div>

          {/* 사이드바 영역 */}
          <div className="side">
            <div className="side-weather"></div>
            <div className="side-notice"></div>
            <div className="side-bestarticle"></div>
            <div className="side-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
