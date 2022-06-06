import React, { useState } from 'react';
import StockChart from '../StockChart';
import dummy from 'assets/dummy';

const getDummyChart = () => {
	return dummy.SNPChart;
};

const StockChartContainer = () => {
	const makeCandleData = () => {
		const { chart } = getDummyChart();
		const { timestamp, indicators } = chart.result[0];
		const { volume, close, open, low, high } = indicators.quote[0];

		return { timestamp, open, high, low, close, volume };
	};

	const { timestamp, open, high, low, close, volume } = makeCandleData();

	const candleInfo = timestamp.map((ts, index) => ({
		x: ts,
		y: [open[index], high[index], low[index], close[index]],
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

	return <StockChart candleSeries={candleSeries} candleOptions={candleOptions} />;
};

export default StockChartContainer;
