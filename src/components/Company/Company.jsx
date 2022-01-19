import React from "react";
import "./Company.scss";
import { ReactComponent as TitleIcon } from "assets/Company/title-icon.svg";

const Company = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="graph-box">
            <div className="graph-title shadow-box">
              <div className="shadow-box icon-container">
                <TitleIcon width="3em" height="3em" fill="white" />
              </div>
              <div className="company-name">Apple Inc. (APPL)</div>
              <div>
                <div className="price">$ 177.27</div>
                <div className="price-ratio">▼ -3.34 +1.14%</div>
              </div>
            </div>
            <div className="graph">
              <div className="btn-list">
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="oneday"
                      name="chart-date"
                      value="1day"
                    />
                    <label className="shadow-box" htmlFor="oneday">
                      1일
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="fiveday"
                      name="chart-date"
                      value="5day"
                    />
                    <label className="shadow-box" htmlFor="fiveday">
                      5일
                    </label>
                  </li>
                  <li>
                    <input
                      id="onemonth"
                      type="radio"
                      name="chart-date"
                      value="1month"
                    />
                    <label className="shadow-box" htmlFor="onemonth">
                      1개월
                    </label>
                  </li>
                  <li>
                    <input
                      id="oneyear"
                      type="radio"
                      name="chart-date"
                      value="1year"
                    />
                    <label className="shadow-box" htmlFor="oneyear">
                      1년
                    </label>
                  </li>
                </ul>
              </div>
              <div className="graph-chart shadow-box">
                <div>나는 그래프다</div>
              </div>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="summary-box">
            <div className="logo">
              <div className="shadow-box company-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"></img>
              </div>
            </div>
            <div className="summary-detail shadow-box">
              <div className="summary-title">회사 개요</div>
              <div className="summary-detail-detail">
                나는 회사다 나는 회사다 나는 회사다 나는 회사다 나는 회사다 나는
                회사다 나는 회사다 나는 회사다 나는 회사다 나는 회사다 나는
                회사다 나는 회사다 나는 회사다 나는 회사다 나는 회사다 나는
                회사다 나는 회사다 나는 회사다 나는 회사다 나는 회사다 나는
                회사다 나는 회사다 나는 회사다 나는 회사다 나는 회사다 나는
                회사다 나는 회사다 나는 회사다 나는 회사다 나는 회사다
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
