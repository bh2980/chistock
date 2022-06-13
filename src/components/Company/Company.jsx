import React from 'react';
import './css/Company.scss';
import RecommendListContainer from './container/RecommendListContainer';
import StockItem from 'components/Stock/StockItem';
import StockDetailChartContainer from 'components/Stock/container/StockDetailChartContainer';
import DashBoardContainer from './container/DashBoardContainer.jsx';

const Company = ({ isLoad, companyInfo, recommendList }) => {
	return isLoad ? null : (
		<div className="container">
			<div className="company-chart-view">
				<RecommendListContainer stockList={recommendList} />
				<div className="company-chart">
					<div className="company-title shadow-box">
						<StockItem companyInfo={companyInfo.data} />
					</div>
					<StockDetailChartContainer chartData={companyInfo.chart} />
				</div>
			</div>
			<div className="vertical-line" />
			<DashBoardContainer companyInfo={companyInfo} dashBoardInfo={companyInfo.data} />
		</div>
	);
};

export default Company;
