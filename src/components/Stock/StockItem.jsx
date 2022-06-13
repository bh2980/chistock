import React from 'react';
import './css/StockItem.scss';

const StockItem = ({ companyInfo }) => {
	return (
		<div className="item-title">
			<div className="symbol-change">
				<span className="symbol">{companyInfo.symbol}</span>
				<span className={companyInfo.regularMarketChange > 0 ? 'change-up' : 'change-down'}>
					{companyInfo.regularMarketChange > 0
						? `▲ +${Math.round(companyInfo.regularMarketChange * 100) / 100} (+${
								Math.round(companyInfo.regularMarketChangePercent * 100) / 100
						  }%)`
						: `▼ ${Math.round(companyInfo.regularMarketChange * 100) / 100} (${
								Math.round(companyInfo.regularMarketChangePercent * 100) / 100
						  }%)`}
				</span>
			</div>
			<div className="name-price">
				<span>
					{companyInfo.shortName === undefined ? companyInfo.symbol : companyInfo.shortName}
				</span>
				<span>
					{new Intl.NumberFormat('en-US', {
						type: 'currency',
						currency: 'USD',
					}).format(companyInfo.regularMarketPrice)}
				</span>
			</div>
		</div>
	);
};

export default StockItem;
