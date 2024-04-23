import React from "react";
import Weather from "../component/Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faUser } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="main">
      {/* 메인 영역 */}
      <div className="main-container">
        <div className="bookmark"></div>
        <div className="wrapper">
          <div className="content">
            <div className="content-icons-section">
              <div className="icons-section-icon"></div>
              <div className="icons-section-icon"></div>
              <div className="icons-section-icon"></div>
              <div className="icons-section-icon"></div>
              <div className="icons-section-icon"></div>
              <Weather />
            </div>
            <div className="write-article-box">
              <div className="write-article-left-box">
                <div className="write-article-icon-box">
                  <FontAwesomeIcon icon={faUser} className="write-article-icon"></FontAwesomeIcon>
                </div>
                <p className="jua-regular">나누고 싶은 추억이 있나요?</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faPen} className="write-icon"></FontAwesomeIcon>
              </div>
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
            <Weather />
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
