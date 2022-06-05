import React from 'react';
import './css/StockItem.scss';

const StockItem = ({ quote }) => {
	return (
		<div className="title shadow-box">
			<div className="company-name">
				<span className="symbol">{quote.symbol}</span>
				<span>{quote.name}</span>
			</div>
			<div className="price">
				<div className={quote.change > 0 ? 'price-ratio-up' : 'price-ratio-down'}>
					{quote.change > 0
						? `▲ ${quote.change.toFixed(2)} ${quote.changesPercentage.toFixed(2)}%`
						: `▼ ${quote.change.toFixed(2)} ${quote.changesPercentage.toFixed(2)}%`}
				</div>
				<div>
					{new Intl.NumberFormat('en-US', {
						type: 'currency',
						currency: 'USD',
					}).format(quote.price)}
				</div>
			</div>
		</div>
	);
};

export default StockItem;
