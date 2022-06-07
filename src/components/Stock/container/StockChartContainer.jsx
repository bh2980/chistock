import React, { useEffect, useState } from 'react';
import StockChart from '../StockChart';
import dummy from 'assets/dummy';

const getDummyChart = () => {
	return dummy.SNPChart;
};

const StockChartContainer = () => {
	const [updateDate, setUpdateDate] = useState(0);
	const [minChart, setMinChart] = useState(0);
	const [maxVolume, setMaxVolume] = useState(0);
	const [candleInfo, setCandleInfo] = useState([]);
	const [volumeInfo, setVolumeInfo] = useState([]);

	const getChartData = () => {
		const { chart } = getDummyChart();
		const { meta, timestamp, indicators } = chart.result[0];
		const { volume, close, open, low, high } = indicators.quote[0];

		const date = new Date(meta.regularMarketTime);
		const uDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
		const newCandle = timestamp.map((ts, index) => ({
			x: ts,
			y: [open[index], high[index], low[index], close[index]],
		}));

		const newVolume = timestamp.map((ts, index) => ({
			x: ts,
			y: volume[index],
		}));

		setUpdateDate(uDate);
		setMinChart(Math.min(...low));
		setMaxVolume(Math.max(...volume) * 3);
		setCandleInfo(newCandle);
		setVolumeInfo(newVolume);
	};

	const series = [
		{
			name: 'candle',
			type: 'candlestick',
			data: candleInfo,
		},
		{
			name: 'volume',
			type: 'column',
			data: volumeInfo,
		},
	];

	const options = {
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
			height: 350,
			type: 'column',
			stacked: false,
			animations: {
				enabled: false,
				easing: 'easeinout',
				speed: 200,
				dynamicAnimation: {
					enabled: false,
					speed: 150,
				},
			},
		},
		dataLabels: {
			enabled: false,
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
		yaxis: [
			{
				seriesName: 'candle',
				min: minChart,
				opposite: true,
				tooltip: {
					enabled: true,
				},
				labels: {
					formatter: function (value) {
						return Math.round(value * 100) / 100;
					},
				},
			},
			{
				seriesName: 'column',
				show: false,
				max: maxVolume,
			},
		],
	};

	useEffect(() => {
		getChartData();
	}, []);

	return <StockChart candleSeries={series} candleOptions={options} updatetime={updateDate} />;
};

export default StockChartContainer;
