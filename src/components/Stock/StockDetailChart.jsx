import React, { useEffect, useState } from 'react';
import images from 'assets/images';
import ReactApexChart from 'react-apexcharts';
import './styles/StockDetailChart.scss';

const StockDetailChart = ({ chartData }) => {
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
			y: [
				Math.round(open[index] * 100) / 100,
				Math.round(high[index] * 100) / 100,
				Math.round(low[index] * 100) / 100,
				Math.round(close[index] * 100) / 100,
			],
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
				columnWidth: isCandle ? '85%' : '100%',
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
			width: isCandle ? 1 : 3,
		},
		markers: {
			size: 0,
			hover: {
				size: 7,
			},
		},
		tooltip: {
			enabled: true,
		},
	};

	useEffect(() => {
		getChartData();
	}, []);

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
						<li>|</li>
						<li>
							<button onClick={chartChange}>
								{isCandle ? (
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302 275.16">
										<g id="레이어_2" data-name="레이어 2">
											<g id="레이어_1-2" data-name="레이어 1">
												<path d="M0,239c.62-2.17,1.22-4.35,1.87-6.52A33,33,0,0,1,37.7,208.59c.82.09,1.64.13,2.88.23L74.86,133.6C64,124,59.65,112.4,63.05,98.44c4.12-17,21.19-27.54,38.78-24.3,16.86,3.11,29.08,19.81,26.45,36.76-.66,4.2.51,6.15,4.09,8.08,14.95,8,29.75,16.34,44.55,24.65,2.33,1.31,3.81,1.44,6-.57a31,31,0,0,1,26.25-8.19c3.42.49,5-.47,6.37-3.59q15.09-33.7,30.56-67.21c1.16-2.52,1.44-4.16-.92-6.42-9.79-9.4-12.71-21-8.81-33.85,3.85-12.64,12.77-20.33,25.85-23A8.53,8.53,0,0,0,264,0h9c1.67.59,3.32,1.23,5,1.76,11.05,3.5,18.29,10.86,22,21.75.74,2.14,1.32,4.33,2,6.49v7c-2.17,5.32-3.53,11.18-6.67,15.84-7.06,10.5-17.58,14.73-30.17,14.2-1.58-.07-4.12.88-4.68,2.07-11.26,24.28-22.29,48.66-33.45,73.17,9.85,9.49,13.72,20.85,10.37,34.11a33.3,33.3,0,0,1-65.11-13.6c.57-3.59-.46-4.94-3.28-6.47q-22.57-12.28-45-24.9c-2.62-1.48-4.33-1.78-6.86.58-6.78,6.34-15.15,8.9-24.36,8.07-3.14-.28-4.69.55-6,3.5Q71.6,177.47,56,211.2c-1.35,2.91-.89,4.62,1.32,6.84a33.31,33.31,0,0,1,6.25,39.12,33.66,33.66,0,0,1-34.67,17.62c-14.8-2.32-25.53-13.27-28-28.55A11.23,11.23,0,0,0,0,244ZM286.49,33.63c0-10-8.52-18.58-18.41-18.45A18.76,18.76,0,0,0,249.89,33.4a18.3,18.3,0,1,0,36.6.23ZM95.2,125.16a18.51,18.51,0,0,0,18.59-18.24c0-9.79-8.71-18.4-18.64-18.35A18.5,18.5,0,0,0,77,106.71,18.14,18.14,0,0,0,95.2,125.16Zm128.28,42.68a18.31,18.31,0,1,0-18.42,18.3A18.37,18.37,0,0,0,223.48,167.84ZM52.16,241.71c0-10.1-8.46-18.6-18.38-18.47A18.77,18.77,0,0,0,15.54,242,18.46,18.46,0,0,0,33.76,260,18.23,18.23,0,0,0,52.16,241.71Z" />
											</g>
										</g>
									</svg>
								) : (
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263.25 274">
										<g id="레이어_2" data-name="레이어 2">
											<g id="레이어_1-2" data-name="레이어 1">
												<path d="M152,0c2,.82,4,1.55,5.89,2.46,7,3.27,11,8.81,11,16.46q.19,70.93,0,141.88c0,9.78-6.61,16.9-16.4,18.35-3.92.58-7.91.71-12.55,1.1v24.82c0,6.49.05,13,0,19.47s-2.6,9.59-7.62,9.46-7.33-3.37-7.36-9.82q-.12-19.23-.18-38.47v-5.53c-4-.31-7.47-.45-10.9-.88C103.49,178,97.5,172,96.24,161.51A56.15,56.15,0,0,1,96,155c0-42.63.29-85.27-.18-127.9C95.7,13.71,99.43,4.07,113,0Zm1.83,90.55q0-34,0-67.93c0-5.57-1.24-6.71-6.78-6.77-9.49-.12-19-.23-28.47-.26-5.26,0-7.36,1.92-7.37,7.21q-.08,67.19,0,134.37c0,5.46,2.3,7.34,7.83,7.27q13.49-.18,27-.27c6.94-.06,7.83-.89,7.83-7.72Q153.89,123.51,153.87,90.55Z" />
												<path d="M225.06,274c-4.35-2.47-5.69-6.21-5.6-11.15.26-13,.09-25.93.09-39.69-3.55,0-6.64.07-9.73,0-11.17-.3-18.87-7.82-18.9-19q-.15-56.7,0-113.42c0-11.42,7.49-19,19-19.69,2.95-.17,5.91,0,9.68,0,0-11.81-.23-23.09.16-34.35.1-3,1.25-7,3.37-8.6,5.3-4.06,11.17,0,11.42,7.59.32,9.81.28,19.64.39,29.46,0,1.79,0,3.57,0,5.87,2.94,0,5.39,0,7.84,0,12.67.21,20.47,8,20.48,20.73q.06,55.47,0,110.93c0,13-7.41,20.4-20.43,20.49-2.47,0-4.94,0-8.22,0v8.71c0,10.33-.2,20.66.08,31,.13,4.94-1.25,8.66-5.59,11.14Zm23-127q0-26.72,0-53.43c0-5.42-1.51-7.25-6.5-7.33-9.65-.15-19.31-.06-29,0-4.4,0-6.6,1.93-6.58,6.7.1,36.12,0,72.25.07,108.37,0,5.26,1.52,6.7,6.92,6.73q13.74.06,27.48,0c6.33,0,7.58-1.25,7.59-7.58Q248.08,173.7,248.06,147Z" />
												<path d="M0,83a37.07,37.07,0,0,0,2.08-3.24Q7.44,69.17,19.28,69c3,0,6,0,9.2,0A28,28,0,0,0,29,65.3q0-24.21-.12-48.44c0-1.33,0-2.67.11-4,.37-5.22,2.62-7.82,6.6-7.69,5.1.17,8.42,3.4,8.43,8.34q0,25,0,50c0,1.62.14,3.24.23,5.37,3.25,0,6.2-.08,9.15,0C65.32,69.21,73,76.92,73,88.9q.12,51.69,0,103.39c0,12.51-7.62,20.18-20.14,20.68-2.65.11-5.32,0-8.84,0,0,9.9.08,19.65-.06,29.39,0,2.26-.26,4.92-1.47,6.64s-3.88,3.75-5.81,3.65c-2.17-.11-4.72-2-6.19-3.91-1.19-1.51-1.38-4.07-1.41-6.17C28.93,233,29,223.31,29,213.35a20.51,20.51,0,0,0-3.51-.25C13.63,214.46,5.33,209.43,0,199Zm57.85,57.83c0-16.66,0-33.32,0-50,0-5.44-1.4-6.8-6.82-6.84-9.33-.07-18.66,0-28,0-6.26,0-7.79,1.35-7.8,7.56q-.11,49.49,0,99c0,5.46,1.84,7.21,7.26,7.27q13.76.15,27.5,0c6.53-.06,7.86-1.46,7.87-8Q57.87,165.32,57.85,140.83Z" />
											</g>
										</g>
									</svg>
								)}
							</button>
						</li>
					</ul>
				</div>
				<div className="update-time">
					<button>
						<img className="update-icon" src={images.sync} />
						<span> {updateDate} 업데이트</span>
					</button>
				</div>
			</div>
			<div className="chart">
				<ReactApexChart options={options} series={series} type="candlestick" height={'100%'} />
			</div>
		</div>
	);
};

export default StockDetailChart;
