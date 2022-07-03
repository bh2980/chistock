import React, { useEffect, useState } from 'react';
import images from 'assets/images';
import ReactApexChart from 'react-apexcharts';
import './css/StockDetailChart.scss';

const StockLineChart = ({ chartData }) => {
	const [updateDate, setUpdateDate] = useState(0);
	const [lineInfo, setLineInfo] = useState([]);

	const getChartData = () => {
		const { timestamp, close } = chartData;

		const date = new Date(timestamp[timestamp.length - 1]);
		const uDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
		const newLine = timestamp.map((ts, index) => ({
			x: ts,
			y: close[index],
		}));

		setUpdateDate(uDate);
		setLineInfo(newLine);
	};

	const series = [
		{
			name: chartData.shortName,
			type: 'line',
			data: lineInfo,
		},
	];

	const options = {
		chart: {
			height: 350,
			type: 'line',
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
		yaxis: {
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
		legend: {
			show: false,
		},
		tooltip: {
			enable: true,
			enabledOnSeries: false,
		},
		stroke: {
			show: true,
			curve: 'smooth',
			lineCap: 'round',
			colors: '#0084ff',
			width: 3,
		},
	};

	useEffect(() => {
		getChartData();
	}, [chartData]);

	return (
		<div className="chart-container shadow-box">
			<div className="period-selector">
				<div></div>
				<div className="update-time">
					<button>
						<img className="update-icon" src={images.sync} />
						<span> {updateDate} 업데이트</span>
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
