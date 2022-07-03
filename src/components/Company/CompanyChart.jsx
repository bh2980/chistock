import StockDetailChart from 'components/Stock/StockDetailChart';
import StockItem from 'components/Stock/StockItem';
import React from 'react';
import './styles/CompanyChart.scss';

const CompanyChart = ({ companyInfo }) => {
	return (
		<div className="company-chart">
			<div className="company-title shadow-box">
				<StockItem companyInfo={companyInfo.data} />
			</div>
			<StockDetailChart chartData={companyInfo.chart} />
		</div>
	);
};

export default CompanyChart;
