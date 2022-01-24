import React from 'react';
import { ReactComponent as TitleIcon } from 'assets/icons/company-title-icon.svg';
import StockChart from './StockChart';

const ConpanyPresenter = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left-box">
          <div className="left-title shadow-box">
            <div className="icon-box shadow-box">
              <TitleIcon width="3em" height="3em" fill="white" />
            </div>
            <div className="company-name">
              {profile.companyName} ({profile.symbol})
            </div>
            <div>
              <div className="price">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: `${profile.currency}`,
                }).format(`${quote.price}`)}
              </div>
              <div className="price-ratio">
                {quote.change > 0
                  ? `▲ ${quote.change.toFixed(2)} ${quote.changesPercentage.toFixed(2)}%`
                  : `▼ ${quote.change.toFixed(2)} ${quote.changesPercentage.toFixed(2)}%`}
              </div>
            </div>
          </div>
          <div className="graph">
            <div className="btn-list">
              <button className="shadow-box">1일</button>
              <button className="shadow-box">5일</button>
              <button className="shadow-box">1개월</button>
              <button className="shadow-box">1년</button>
            </div>
            <div className="graph-chart shadow-box">
              <StockChart stockHistory={stockHistory} />
            </div>
          </div>
        </div>
        <div className="vertical-line" />
        <div className="summary-box">
          <div className="summary-logo">
            <div className="logo-box shadow-box">
              <img alt="Apple Inc." src={profile.image}></img>
            </div>
          </div>
          <div className="summary-detail shadow-box">
            <div className="summary-title">회사 개요</div>
            <div className="summary-content">{profile.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPresenter;
