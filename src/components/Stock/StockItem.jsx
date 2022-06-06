import React from 'react';
import './css/StockItem.scss';

const StockItem = ({ companyInfo }) => {
	return (
		<div className="title shadow-box">
			<div className="company-name">
				<span className="symbol">{companyInfo.symbol}</span>
				<span>{companyInfo.quoteType.shortName}</span>
			</div>
			<div className="price">
				<div
					className={
						companyInfo.price.regularMarketChange.raw > 0 ? 'price-ratio-up' : 'price-ratio-down'
					}
				>
					{companyInfo.price.regularMarketChange.raw > 0
						? `▲ +${companyInfo.price.regularMarketChange.raw.toFixed(2)} +${
								companyInfo.price.regularMarketChangePercent.fmt
						  }`
						: `▼ ${companyInfo.price.regularMarketChange.raw.toFixed(2)} ${
								companyInfo.price.regularMarketChangePercent.fmt
						  }`}
				</div>
				<div>
					{new Intl.NumberFormat('en-US', {
						type: 'currency',
						currency: 'USD',
					}).format(companyInfo.price.regularMarketPrice.raw)}
				</div>
			</div>
		</div>
	);
};

export default StockItem;
