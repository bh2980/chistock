import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import dummy from 'assets/dummy.js';
import './css/StockChart.scss';

const getStockHistory = dummyStock => {
	if ('historical' in dummyStock) {
		return [...dummyStock.historical].reverse();
	} else {
		return [...dummyStock].reverse();
	}
};

const StockChart = () => {
	const [stockHistory, setStockHistory] = useState(getStockHistory(dummy.AppleHistory1Day));

	const chartChange = newData => {
		setStockHistory(newData);
	};

	const candleInfo = stockHistory.map(({ date, open, low, high, close }) => ({
		x: new Date(date),
		y: [open, high, low, close],
	}));

	const candleSeries = [
		{
			data: candleInfo,
		},
	];

	const candleOptions = {
		plotOptions: {
			candlestick: {
				colors: {
					upward: '#e64747',
					downward: '#3861e8',
				},
				wick: {
					useFillColor: true,
				},
			},
		},
		chart: {
			type: 'candlestick',
			animations: {
				enabled: true,
				easing: 'easeinout',
				speed: 150,
				dynamicAnimation: {
					enabled: true,
					speed: 150,
				},
			},
		},
		xaxis: {
			type: 'datetime',
			labels: {
				datetimeFormatter: {
					year: 'yyyy',
					month: "MMM 'yy",
					day: 'dd MMM',
					hour: 'HH:mm',
				},
			},
		},
		yaxis: {
			tooltip: {
				enabled: true,
			},
			labels: {
				formatter: function (value) {
					return value + '.0';
				},
			},
		},
	};

	return (
		<div className="chart-container shadow-box">
			<div className="period-selector">
				<ul>
					<li>
						<input type="radio" id="oneday" name="chart-date" value="1day" defaultChecked />
						<label htmlFor="oneday" onClick={() => chartChange(dummy.AppleHistory1Day)}>
							1D
						</label>
					</li>
					<li>
						<input type="radio" id="fiveday" name="chart-date" value="5day" />
						<label htmlFor="fiveday" onClick={() => chartChange(dummy.AppleHistory5Day)}>
							5D
						</label>
					</li>
					<li>
						<input id="onemonth" type="radio" name="chart-date" value="1month" />
						<label htmlFor="onemonth" onClick={() => chartChange(dummy.AppleHistory1Month)}>
							1M
						</label>
					</li>
					<li>
						<input id="oneyear" type="radio" name="chart-date" value="1year" />
						<label htmlFor="oneyear" onClick={() => chartChange(dummy.AppleHistory1Year)}>
							1Y
						</label>
					</li>
				</ul>
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
