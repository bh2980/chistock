import images from 'assets/images';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './css/StockDetailChart.scss';

const StockLineChart = ({ series, options, updatetime, setIsLineChart }) => {
	return (
		<div className="chart-container shadow-box">
			<div className="period-selector">
				<div></div>
				<div className="update-time">
					<button>
						<img className="update-icon" src={images.sync} />
						<span> {updatetime} 업데이트</span>
					</button>
				</div>
			</div>
			<div className="chart">
				<ReactApexChart options={options} series={series} type="line" height={'100%'} />
			</div>
		</div>
	);
};

export default StockLineChart;
