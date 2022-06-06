import images from 'assets/images';
import React from 'react';
import StockItem from './StockItem';
import StockChart from './StockChart';
import './css/StockView.scss';

const StockView = ({ quote }) => {
	return (
		<div className="stock-view-box">
			<div className="recommend-list">
				<StockItem quote={quote} />
				<StockItem quote={quote} />
				<StockItem quote={quote} />
				<StockItem quote={quote} />
				<StockItem quote={quote} />
			</div>
			<div className="stock-chart">
				<StockItem quote={quote} />
				<StockChart />
			</div>
		</div>
	);
};

export default StockView;
