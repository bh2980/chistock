import React from 'react';

const StockItem = ({ idx, code, percentDelta, price }) => {
	return (
		<div className="stock-list shadow-box">
			<div className="stock shadow-box">
				<div className="rank shadow-box">{idx}</div>
				<div className="item-code shadow-box">{code}</div>
				<div className="price-container shadow-box">
					<div className={`delta ${percentDelta > 0 ? 'inc' : 'desc'}`}>{percentDelta}%</div>
					<div className="price">${price}</div>
				</div>
			</div>
		</div>
	);
};

export default StockItem;
