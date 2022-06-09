import React, { useEffect, useState } from 'react';
import StockDetailChart from '../StockDetailChart';

const StockDetailChartContainer = ({ chartData }) => {
	const [companyName, setCompanyName] = useState('');
	const [updateDate, setUpdateDate] = useState(0);
	const [minChart, setMinChart] = useState(0);
	const [maxVolume, setMaxVolume] = useState(0);
	const [candleInfo, setCandleInfo] = useState([]);
	const [volumeInfo, setVolumeInfo] = useState([]);
	const [isCandle, setIsCandle] = useState(false);

	const chartChange = () => {
		setIsCandle(current => !current);
	};

	const getChartData = () => {
		const { shortName, timestamp, open, high, low, close, volume, regularMarketTime } = chartData;

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
		setMinChart(Math.floor(Math.min(...low)));
		setMaxVolume(Math.max(...volume) * 3);
		setCandleInfo(newCandle.slice(0, 40));
		setVolumeInfo(newVolume.slice(0, 40));
		setCompanyName(shortName);
	};

	const series = [
		{
			name: companyName,
			type: isCandle ? 'candlestick' : 'line',
			data: candleInfo,
		},
		{
			name: 'volume',
			type: 'bar',
			data: volumeInfo,
		},
	];

	const options = {
		plotOptions: {
			candlestick: {
				colors: {
					upward: '#e64747',
					downward: '#0084ff',
				},
			},
			bar: {
				columnWidth: isCandle ? '90%' : '100%',
			},
		},
		chart: {
			height: 350,
			type: 'bar',
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
				enabled: true,
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
				seriesName: companyName,
				forceNiceScale: true,
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
				seriesName: 'volume',
				show: false,
				max: maxVolume,
			},
		],
		legend: {
			show: false,
		},
		stroke: {
			show: true,
			curve: 'smooth',
			lineCap: 'round',
			colors: '#0084ff',
			width: isCandle ? 2 : 3,
		},
		markers: {
			size: 0,
			hover: {
				size: 7,
			},
		},
		tooltip: {
			enabled: true,
			custom: function ({ series, seriesIndex, dataPointIndex, w }) {
				return `<div class="tooltip-box">${companyName} : <span>${
					Math.round(series[seriesIndex][dataPointIndex] * 100) / 100
				}</span></div>`;
			},
		},
	};

	useEffect(() => {
		getChartData();
	}, []);

	return (
		<StockDetailChart
			series={series}
			options={options}
			updatetime={updateDate}
			isCandle={isCandle}
			chartChange={chartChange}
		/>
	);
};

export default StockDetailChartContainer;
