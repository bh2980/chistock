import images from 'assets/images';
import React from 'react';
import StockItem from './StockItem';
import StockCandleChartContainer from './container/StockCandleChartContainer';
import StockLineChartContainer from './container/StockLineChartContainer';
import './css/StockView.scss';

const StockView = ({ companyInfo, chartData, recomViewList, onClickRecommend }) => {
	return (
		<div className="stock-view-box">
			<div className="recommend-list">
				{recomViewList.map((recommend, index) => (
					<button key={index} className="shadow-box" onClick={index => onClickRecommend(index)}>
						<StockItem companyInfo={recommend.data} />
					</button>
				))}
			</div>
			<div className="stock-chart">
				<div className="chart-title shadow-box">
					<StockItem companyInfo={companyInfo} />
				</div>
				{!chartData.open ? (
					<StockLineChartContainer chartData={chartData} />
				) : (
					<StockCandleChartContainer chartData={chartData} />
				)}
			</div>
		</div>
	);
};

export default StockView;
