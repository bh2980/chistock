import React, { useEffect, useState } from 'react';
import './style/index.scss';
import trending from 'assets/icons/trending_up.svg';
import fire from 'assets/icons/fire.svg';
import ReactApexChart from 'react-apexcharts';
import StockItem from './components/StockItem';

const NASDAQDummy = [
	{
		symbol: '^IXIC',
		name: 'NASDAQ Composite',
		price: 14506.896,
		changesPercentage: -2.597441,
	},
];
const NASDAQ100Dummy = [
	{
		symbol: 'ATVI',
		name: 'Activision Blizzard',
		sector: 'Communication Services',
		subSector: 'Communication Services',
		headQuarter: 'Santa Monica, CALIFORNIA',
		dateFirstAdded: null,
		cik: '0000718877',
		founded: '1983-06-10',
	},
	{
		symbol: 'ADBE',
		name: 'Adobe',
		sector: 'Technology',
		subSector: 'Technology',
		headQuarter: 'San Jose, CALIFORNIA',
		dateFirstAdded: null,
		cik: '0000796343',
		founded: '1986-01-08',
	},
	{
		symbol: 'AMD',
		name: 'Advanced Micro Devices',
		sector: 'Technology',
		subSector: 'Technology',
		headQuarter: 'Santa Clara, CALIFORNIA',
		dateFirstAdded: null,
		cik: '0000002488',
		founded: '1979-10-15',
	},
	{
		symbol: 'ABNB',
		name: 'Airbnb',
		sector: 'Communication Services',
		subSector: 'Communication Services',
		headQuarter: 'San Francisco, CA',
		dateFirstAdded: null,
		cik: '0001559720',
		founded: '2020-12-10',
	},
	{
		symbol: 'ALGN',
		name: 'Align Technology',
		sector: 'Healthcare',
		subSector: 'Healthcare',
		headQuarter: 'San Jose, CALIFORNIA',
		dateFirstAdded: null,
		cik: '0001097149',
		founded: '2001-01-26',
	},
	{
		symbol: 'GOOGL',
		name: 'Alphabet (Class A)',
		sector: 'Communication Services',
		subSector: 'Communication Services',
		headQuarter: 'Mountain View, CALIFORNIA',
		dateFirstAdded: null,
		cik: '0001652044',
		founded: '2004-08-19',
	},
	{
		symbol: 'GOOG',
		name: 'Alphabet (Class C)',
		sector: 'Communication Services',
		subSector: 'Communication Services',
		headQuarter: 'Mountain View, CA',
		dateFirstAdded: null,
		cik: '0001652044',
		founded: '2004-08-19',
	},
	{
		symbol: 'AMZN',
		name: 'Amazon',
		sector: 'Consumer Cyclical',
		subSector: 'Consumer Cyclical',
		headQuarter: 'Seattle, WASHINGTON',
		dateFirstAdded: null,
		cik: '0001018724',
		founded: '1997-05-01',
	},
	{
		symbol: 'AEP',
		name: 'American Electric Power',
		sector: 'Utilities',
		subSector: 'Utilities',
		headQuarter: 'Columbus, OHIO',
		dateFirstAdded: null,
		cik: '0000004904',
		founded: '1949-09-01',
	},
	{
		symbol: 'AMGN',
		name: 'Amgen',
		sector: 'Healthcare',
		subSector: 'Healthcare',
		headQuarter: 'Thousand Oaks, CALIFORNIA',
		dateFirstAdded: null,
		cik: '0000318154',
		founded: '1987-05-01',
	},
	{
		symbol: 'ADI',
		name: 'Analog Devices',
		sector: 'Technology',
		subSector: 'Technology',
		headQuarter: 'Norwood, MASSACHUSETTS',
		dateFirstAdded: null,
		cik: '0000006281',
		founded: '1979-04-03',
	},
];

const NASDAQHistoryDummy = {
	symbol: '^GSPC',
	historical: [
		{
			date: '2022-01-19',
			open: 4588.029785,
			high: 4611.549805,
			low: 4530.200195,
			close: 4532.759766,
			adjClose: 4532.759766,
			volume: 2.483432e9,
			unadjustedVolume: 2.483432e9,
			change: -55.27002,
			changePercent: -1.205,
			vwap: 4558.16992,
			label: 'January 19, 22',
			changeOverTime: -0.01205,
		},
		{
			date: '2022-01-18',
			open: 4632.240234,
			high: 4632.240234,
			low: 4568.700195,
			close: 4577.109863,
			adjClose: 4577.109863,
			volume: 3.32496e9,
			unadjustedVolume: 3.32496e9,
			change: -55.13037,
			changePercent: -1.19,
			vwap: 4592.68343,
			label: 'January 18, 22',
			changeOverTime: -0.0119,
		},
		{
			date: '2022-01-14',
			open: 4637.990234,
			high: 4665.129883,
			low: 4614.75,
			close: 4662.850098,
			adjClose: 4662.850098,
			volume: 3.48353e9,
			unadjustedVolume: 3.48353e9,
			change: 24.85986,
			changePercent: 0.536,
			vwap: 4647.57666,
			label: 'January 14, 22',
			changeOverTime: 0.00536,
		},
		{
			date: '2022-01-13',
			open: 4733.560059,
			high: 4744.129883,
			low: 4650.290039,
			close: 4659.029785,
			adjClose: 4659.029785,
			volume: 3.53983e9,
			unadjustedVolume: 3.53983e9,
			change: -74.53027,
			changePercent: -1.575,
			vwap: 4684.48324,
			label: 'January 13, 22',
			changeOverTime: -0.01575,
		},
		{
			date: '2022-01-12',
			open: 4728.589844,
			high: 4748.830078,
			low: 4706.709961,
			close: 4726.350098,
			adjClose: 4726.350098,
			volume: 3.06004e9,
			unadjustedVolume: 3.06004e9,
			change: -2.23975,
			changePercent: -0.047,
			vwap: 4727.29671,
			label: 'January 12, 22',
			changeOverTime: -4.7e-4,
		},
		{
			date: '2022-01-11',
			open: 4669.140137,
			high: 4714.129883,
			low: 4638.27002,
			close: 4713.069824,
			adjClose: 4713.069824,
			volume: 3.4216e9,
			unadjustedVolume: 3.4216e9,
			change: 43.92969,
			changePercent: 0.941,
			vwap: 4688.48991,
			label: 'January 11, 22',
			changeOverTime: 0.00941,
		},
		{
			date: '2022-01-10',
			open: 4655.339844,
			high: 4673.02002,
			low: 4582.240234,
			close: 4670.290039,
			adjClose: 4670.290039,
			volume: 3.6218e9,
			unadjustedVolume: 3.6218e9,
			change: 14.9502,
			changePercent: 0.321,
			vwap: 4641.8501,
			label: 'January 10, 22',
			changeOverTime: 0.00321,
		},
		{
			date: '2022-01-07',
			open: 4697.660156,
			high: 4707.950195,
			low: 4662.740234,
			close: 4677.029785,
			adjClose: 4677.029785,
			volume: 3.27987e9,
			unadjustedVolume: 3.27987e9,
			change: -20.63037,
			changePercent: -0.439,
			vwap: 4682.5734,
			label: 'January 07, 22',
			changeOverTime: -0.00439,
		},
	],
};

const priceHistoryDummy = [
	{
		symbol: 'AAPL',
		historical: [
			{
				date: '2022-01-20',
				open: 166.98,
				high: 169.64,
				low: 164.23,
				close: 164.51,
				adjClose: 164.51,
				volume: 9.0212549e7,
				unadjustedVolume: 9.0212549e7,
				change: -2.47,
				changePercent: -1.479,
				vwap: 166.12667,
				label: 'January 20, 22',
				changeOverTime: -0.01479,
			},
			{
				date: '2022-01-19',
				open: 170.0,
				high: 171.08,
				low: 165.94,
				close: 166.23,
				adjClose: 166.23,
				volume: 9.4481247e7,
				unadjustedVolume: 9.4481247e7,
				change: -3.77,
				changePercent: -2.218,
				vwap: 167.75,
				label: 'January 19, 22',
				changeOverTime: -0.02218,
			},
		],
	},
];

const currentPriceDummy = [
	{
		symbol: 'AAPL',
		price: 164.51,
		volume: 91420515,
	},
];

const chartOption = {
	chart: {
		type: 'candlestick',
		height: 350,
	},
	title: {
		text: 'CandleStick Chart',
		align: 'left',
	},
	xaxis: {
		type: 'datetime',
	},
	yaxis: {
		tooltip: {
			enabled: true,
		},
	},
	plotOptions: {
		candlestick: {
			colors: {
				upward: '#f00',
				downward: '#00f',
			},
		},
	},
};

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [buttonSelected, setButtonSelected] = useState(0);
	const [NASDAQInfo, setNASDAQInfo] = useState([]);
	const [NASDAQ100, setNASDAQ100] = useState([]);
	const [NASDAQHistory, setNASDAQHistory] = useState({});

	let series = [{ data: [{}] }];

	const getNASDAQInfo = () => {
		return NASDAQDummy;
	};
	const getNASDAQ100 = () => {
		return NASDAQ100Dummy;
	};
	const getNASDAQHistory = () => {
		return NASDAQHistoryDummy;
	};
	const getPriceDelta = code => {
		return priceHistoryDummy[0].historical[0].changePercent;
	};
	const getCurrentPrice = code => {
		return currentPriceDummy[0].price;
	};
	const buttonOnClick = idx => {
		setButtonSelected(idx);
	};

	useEffect(() => {
		setNASDAQInfo(getNASDAQInfo());
		setNASDAQ100(getNASDAQ100());
		setNASDAQHistory(getNASDAQHistory());
		setIsLoading(false);
	}, []);

	const testVal = [
		{
			data: [
				{
					x: new Date(2020, 0, 1),
					y: [6629.81, 6650.5, 6623.04, 6633.33],
				},
				{
					x: new Date(2020, 0, 2),
					y: [6632.01, 6643.59, 6620, 6630.11],
				},
				{
					x: new Date(2020, 0, 3),
					y: [6630.71, 6648.95, 6623.34, 6635.65],
				},
				{
					x: new Date(2020, 0, 4),
					y: [6635.65, 6651, 6629.67, 6638.24],
				},
				{
					x: new Date(2020, 0, 5),
					y: [6636.65, 6655, 6629.68, 6639.24],
				},
			],
		},
	];

	return (
		<div className="home">
			{isLoading ? (
				<span>Loading</span>
			) : (
				<>
					<div className="chart-container shadow-box">
						<div className="title">
							<div className="image-container shadow-box">
								<img src={trending} alt="trending icon" />
							</div>
							<div className="texts">
								<div className="title-area">
									<span className="title-text">나스닥 종합</span>
								</div>
								<div
									className={`price-area ${NASDAQInfo[0].changesPercentage > 0 ? 'inc' : 'desc'}`}
								>
									<span className="current-price">{NASDAQInfo[0].price}</span>
									<span className="price-delta">{`${NASDAQInfo[0].changesPercentage}%`}</span>
								</div>
							</div>
						</div>
						<div className="chart">
							<div className="buttons">
								<button
									className={`shadow-box ${buttonSelected === 0 && 'clicked'}`}
									onClick={() => buttonOnClick(0)}
								>
									1분
								</button>
								<button
									className={`shadow-box ${buttonSelected === 1 && 'clicked'}`}
									onClick={() => buttonOnClick(1)}
								>
									5분
								</button>
								<button
									className={`shadow-box ${buttonSelected === 2 && 'clicked'}`}
									onClick={() => buttonOnClick(2)}
								>
									15분
								</button>
								<button
									className={`shadow-box ${buttonSelected === 3 && 'clicked'}`}
									onClick={() => buttonOnClick(3)}
								>
									30분
								</button>
								<button
									className={`shadow-box ${buttonSelected === 4 && 'clicked'}`}
									onClick={() => buttonOnClick(4)}
								>
									4시간
								</button>
								<button
									className={`shadow-box ${buttonSelected === 5 && 'clicked'}`}
									onClick={() => buttonOnClick(5)}
								>
									하루
								</button>
							</div>
							{console.log('on Render', [
								{
									data: [
										NASDAQHistory.historical.map(item => {
											return {
												x: new Date(item.date),
												y: [item.open, item.high, item.low, item.close],
											};
										}),
									],
								},
							])}
							{console.log('testVal', testVal)}
							<ReactApexChart
								type="candlestick"
								options={chartOption}
								series={[
									{
										data: NASDAQHistory.historical.map(item => {
											return {
												x: new Date(item.date),
												y: [item.open, item.high, item.low, item.close],
											};
										}),
									},
								]}
								height={500}
							/>
						</div>
					</div>
					<div className="line" />
					<div className="main-item">
						<div className="title shadow-box">
							<div className="image-container shadow-box">
								<img src={fire} alt="fire icon" />
							</div>
							<div className="title">
								<span className="title-text">주요 종목</span>
							</div>
						</div>
						<div className="stock-list shadow-box">
							{NASDAQ100.map((item, idx) => (
								<StockItem
									key={idx}
									idx={idx + 1}
									code={item.symbol}
									percentDelta={getPriceDelta(item.symbol)}
									price={getCurrentPrice(item.symbol)}
								/>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Home;
