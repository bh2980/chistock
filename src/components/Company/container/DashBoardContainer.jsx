import React, { useEffect, useState } from 'react';
import DashBoard from '../components/DashBoard.jsx';

const DashBoardContainer = ({ dashBoardInfo }) => {
	const [isLoad, setIsLoad] = useState(true);
	const [recommendData, setRecommendData] = useState();
	const [recommendOptions, setRecommendOptions] = useState();
	const [earningData, setEarningData] = useState();
	const [earningOptions, setEarningOptions] = useState();

	const getRecommendTrend = () => {
		const { recommendationTrend } = dashBoardInfo;

		const tempRecommendInfo = {
			period: [],
			strongBuy: [],
			buy: [],
			hold: [],
			sell: [],
			strongSell: [],
		};

		recommendationTrend.trend.map(recommend => {
			tempRecommendInfo.period.push(Math.abs(parseInt(recommend.period)));
			tempRecommendInfo.strongBuy.push(recommend.strongBuy);
			tempRecommendInfo.buy.push(recommend.buy);
			tempRecommendInfo.hold.push(recommend.hold);
			tempRecommendInfo.sell.push(recommend.sell);
			tempRecommendInfo.strongSell.push(recommend.strongSell);
		});

		const series = [
			{
				name: '강력매도',
				type: 'bar',
				data: tempRecommendInfo.strongSell,
			},
			{
				name: '매도',
				type: 'bar',
				data: tempRecommendInfo.sell,
			},
			{
				name: '중립',
				type: 'bar',
				data: tempRecommendInfo.hold,
			},
			{
				name: '매수',
				type: 'bar',
				data: tempRecommendInfo.buy,
			},
			{
				name: '강력매수',
				type: 'bar',
				data: tempRecommendInfo.strongBuy,
			},
		];

		setRecommendData(series);

		const options = {
			chart: {
				type: 'bar',
				height: 350,
				stacked: true,
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
			},
			plotOptions: {
				bar: {
					horizontal: false,
					borderRadius: 10,
				},
			},
			stroke: {
				width: 1,
				colors: ['#fff'],
			},
			xaxis: {
				categories: tempRecommendInfo.period,
				labels: {
					formatter: function (val) {
						return val === 0 ? '현재' : val + '개월 전';
					},
				},
			},
			yaxis: {
				title: {
					text: undefined,
				},
			},
			tooltip: {
				enabled: false,
			},
			fill: {
				opacity: 1,
			},
			legend: {
				position: 'bottom',
				height: 40,
				horizontalAlign: 'center',
				offsetX: -20,
			},
		};

		setRecommendOptions(options);
	};

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
	};

	useEffect(() => {
		getRecommendTrend();
		getEarningData();
		setIsLoad(false);
	}, []);

	return (
		<DashBoard
			isLoad={isLoad}
			recommendData={recommendData}
			recommendOptions={recommendOptions}
			dashBoardInfo={dashBoardInfo}
		/>
	);
};

export default DashBoardContainer;
