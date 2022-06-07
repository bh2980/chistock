import images from 'assets/images';
import React from 'react';
import StockItem from './StockItem';
import StockChartContainer from './container/StockChartContainer';
import './css/StockView.scss';

const StockView = ({ companyInfo, recommendList }) => {
	return (
		<div className="stock-view-box">
			<div className="recommend-list">
				{recommendList.map(recommend => (
					<button className="shadow-box">
						<StockItem companyInfo={recommend} />
					</button>
				))}
			</div>
			<div className="stock-chart">
				<div className="chart-title shadow-box">
					<StockItem companyInfo={companyInfo} />
				</div>
				<StockChartContainer />
			</div>
		</div>
	);
};

export default StockView;
