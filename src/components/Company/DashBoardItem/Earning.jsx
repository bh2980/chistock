import { getStockSummary } from 'lib/fetchData';
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const Earning = ({ ticker }) => {
	const [isLoad, setIsLoad] = useState(true);
	const [earningSeries, setEarningSeries] = useState();
	const [earningOptions, setEarningOptions] = useState();

	const getEarningData = async ticker => {
		const { data } = await getStockSummary(ticker);
		const { earnings } = data;
		const { earningsChart } = earnings;
		const {
			currentQuarterEstimate,
			currentQuarterEstimateDate,
			currentQuarterEstimateYear,
			quarterly,
		} = earningsChart;

		const estimate = quarterly.map(item => {
			return item.estimate.raw;
		});

		const actual = quarterly.map(item => {
			return item.actual.raw;
		});

		const xlabel = quarterly.map(item => {
			return item.date;
		});

		const series = [
			{
				name: 'Estimate',
				data: [...estimate, currentQuarterEstimate.raw],
			},
			{
				name: 'Actual',
				data: [...actual],
			},
		];

		const options = {
			chart: {
				height: 350,
				type: 'scatter',
				toolbar: {
					show: false,
				},
			},
			xaxis: {
				categories: [...xlabel, currentQuarterEstimateDate + currentQuarterEstimateYear],
				labels: {
					formatter: function (val) {
						const label = val + '';
						return label.substring(4) + ' ' + label.substring(0, 2);
					},
				},
			},
			markers: {
				size: [10, 6],
				strokeWidth: 0,
			},
		};

		setEarningSeries(series);
		setEarningOptions(options);
		setIsLoad(false);
	};

	useEffect(() => {
		getEarningData(ticker);
	}, []);

	return isLoad ? null : (
		<>
			<div className="card-title">Earnings</div>
			<ReactApexChart
				series={earningSeries}
				options={earningOptions}
				type="scatter"
				height="280px"
			/>
		</>
	);
};

export default Earning;
