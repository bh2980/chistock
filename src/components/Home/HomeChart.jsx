import './style/HomeChart.scss';
import StockItem from 'components/Stock/StockItem';
import StockLineChart from 'components/Stock/StockLineChart';
import React, { useEffect, useState } from 'react';

const HomeChart = ({ viewStock }) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (viewStock) setIsLoading(false);
	}, [viewStock]);
	return isLoading ? null : (
		<div className="main-chart">
			<div className="main-title shadow-box">
				<StockItem companyInfo={viewStock.data} />
			</div>
			<StockLineChart chartData={viewStock.chart} />
		</div>
	);
};

export default HomeChart;
