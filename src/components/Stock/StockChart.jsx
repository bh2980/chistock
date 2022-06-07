import images from 'assets/images';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './css/StockChart.scss';

const StockChart = ({ candleSeries, candleOptions, updatetime }) => {
	return (
		<div className="chart-container shadow-box">
			<div className="period-selector">
				<div>
					<ul>
						<li>
							<input type="radio" id="oneday" name="chart-date" value="1day" defaultChecked />
							<label htmlFor="oneday">1D</label>
						</li>
						<li>
							<input type="radio" id="fiveday" name="chart-date" value="5day" />
							<label htmlFor="fiveday">5D</label>
						</li>
						<li>
							<input id="onemonth" type="radio" name="chart-date" value="1month" />
							<label htmlFor="onemonth">1M</label>
						</li>
						<li>
							<input id="oneyear" type="radio" name="chart-date" value="1year" />
							<label htmlFor="oneyear">1Y</label>
						</li>
					</ul>
				</div>
				<div className="update-time">
					<button>
						<img className="update-icon" src={images.sync} />
						<span> {updatetime} 업데이트</span>
					</button>
				</div>
			</div>
			<div className="chart">
				<ReactApexChart
					options={candleOptions}
					series={candleSeries}
					type="candlestick"
					height={'100%'}
				/>
			</div>
		</div>
	);
};

export default StockChart;
