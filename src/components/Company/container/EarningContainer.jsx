import React, { useState, useEffect } from 'react';
import Earning from '../components/Earning';

const EarningContainer = ({ dashBoardInfo }) => {
	const [isLoad, setIsLoad] = useState(true);
	const [earningSeries, setEarningSeries] = useState();
	const [earningOptions, setEarningOptions] = useState();

	const getEarningData = () => {
		const { earnings } = dashBoardInfo;
		const { earningsChart } = earnings;
		const {
			currentQuarterEstimate,
			currentQuarterEstimateDate,
			currentQuarterEstimateYear,
			earningsDate,
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
	};

	useEffect(() => {
		getEarningData();
		setIsLoad(false);
	}, []);

	return isLoad ? null : <Earning earningSeries={earningSeries} earningOptions={earningOptions} />;
};

export default EarningContainer;
