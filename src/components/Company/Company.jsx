import React from "react";
import "./Company.scss";

const Company = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="graph-box">
            <div className="graph-title float-box"></div>
            <div className="graph">
              <div className="btn-list">
                <ul>
                  <li>1일</li>
                  <li>5일</li>
                  <li>1개월</li>
                  <li>1년</li>
                </ul>
              </div>
              <div>나는 그래프</div>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="summary-box">
            <div className="logo"></div>
            <div className="summary-detail float-box">
              <div>회사 개요</div>
              <div>
                Lorem ipsum sit amet,
                conasndklasknlakwqkfbladkfjasknfjadhgaiuelmadm sdalskflabelkjfbl
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
