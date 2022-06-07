import React from 'react';
import './css/StockItem.scss';

const StockItem = ({ companyInfo }) => {
	return (
		<div className="item-title">
			<div className="company-name">
				<span className="symbol">{companyInfo.symbol}</span>
				<span>
					{companyInfo.shortName === undefined ? companyInfo.symbol : companyInfo.shortName}
				</span>
			</div>
			<div className="price">
				<div
					className={companyInfo.regularMarketChange > 0 ? 'price-ratio-up' : 'price-ratio-down'}
				>
					{companyInfo.regularMarketChange > 0
						? `▲ +${Math.round(companyInfo.regularMarketChange * 100) / 100} (+${
								Math.round(companyInfo.regularMarketChangePercent * 100) / 100
						  }%)`
						: `▼ ${Math.round(companyInfo.regularMarketChange * 100) / 100} (${
								Math.round(companyInfo.regularMarketChangePercent * 100) / 100
						  }%)`}
				</div>
				<div>
					{new Intl.NumberFormat('en-US', {
						type: 'currency',
						currency: 'USD',
					}).format(companyInfo.regularMarketPrice)}
				</div>
			</div>
		</div>
	);
};

export default StockItem;
