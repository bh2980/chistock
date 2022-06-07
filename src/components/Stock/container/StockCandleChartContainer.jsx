import React, { useEffect, useState } from 'react';
import StockCandleChart from '../StockCandleChart';

const StockCandleChartContainer = ({ chartData }) => {
	console.log(chartData);
	const [updateDate, setUpdateDate] = useState(0);
	const [minChart, setMinChart] = useState(0);
	const [maxVolume, setMaxVolume] = useState(0);
	const [candleInfo, setCandleInfo] = useState([]);
	const [volumeInfo, setVolumeInfo] = useState([]);

	const getChartData = () => {
		const { timestamp, open, high, low, close, volume, regularMarketTime } = chartData;

		const date = new Date(regularMarketTime);
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
			toolbar: {
				show: false,
				tools: {
					download: false,
					selection: false,
					zoom: false,
					zoomin: false,
					zoomout: false,
					pan: false,
					reset: true,
				},
			},
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
		legend: {
			show: false,
		},
	};

	useEffect(() => {
		getChartData();
	}, []);

	return <StockCandleChart series={series} options={options} updatetime={updateDate} />;
};

export default StockCandleChartContainer;
