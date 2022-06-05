import images from 'assets/images';
import React from 'react';
import StockItem from './StockItem';
import StockChart from './StockChart';
import './css/StockView.scss';

const StockView = ({ quote }) => {
	return (
		<div className="stock-view-box">
			<StockItem quote={quote} />
			<StockChart />
		</div>
	);
};

export default StockView;
