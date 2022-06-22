import React, { useEffect, useState } from 'react';
import dummy from 'assets/dummy.js';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './css/Company.scss';
import RecommendList from './components/RecommendList';
import StockItem from 'components/Stock/StockItem';
import StockDetailChartContainer from 'components/Stock/container/StockDetailChartContainer';
import DashBoard from './components/DashBoard.jsx';

const Company = () => {
	const { ticker } = useParams();
	const [companyInfo, setCompanyInfo] = useState(null);
	const [recommendList, setRecommendList] = useState([]);
	const [isLoad, setIsLoad] = useState(true);

	const getCompanyInfo = ticker => {
		console.log(ticker);
		const { price, quoteType, summaryProfile, recommendationTrend, earnings } = dummy.AppleSummary;
		const { sector, longBusinessSummary, website, industry, country } = summaryProfile;
		const { shortName, symbol } = quoteType;
		const {
			regularMarketChange,
			regularMarketChangePercent,
			regularMarketPrice,
			regularMarketTime,
		} = price;
		const { logo } = dummy.AppleProfile;
		const news = dummy.AppleNews;

		const { meta, timestamp, indicators } = dummy.AppleChart[0];
		const { exchangeName } = meta;
		const { high, open, close, low, volume } = indicators.quote[0];

		setCompanyInfo({
			data: {
				symbol,
				logo,
				shortName,
				regularMarketChange: regularMarketChange.raw,
				regularMarketChangePercent: regularMarketChangePercent.raw,
				regularMarketPrice: regularMarketPrice.raw,
				sector,
				summary: longBusinessSummary,
				website,
				industry,
				country,
				exchangeName,
				recommendationTrend,
				earnings,
				news,
			},
			chart: {
				shortName,
				timestamp,
				open,
				close,
				high,
				low,
				volume,
				regularMarketTime,
			},
		});
	};

	const getRecommendList = ticker => {
		const response = dummy.AppleRecommend[0].quotes;
		const newRecommendList = response.map(item => {
			const {
				regularMarketChange,
				regularMarketChangePercent,
				regularMarketPrice,
				symbol,
				shortName,
			} = item;
			return {
				data: {
					regularMarketChange,
					regularMarketChangePercent,
					regularMarketPrice,
					symbol,
					shortName,
				},
			};
		});

		setRecommendList(newRecommendList);
	};

	useEffect(() => {
		setIsLoad(true);
		getCompanyInfo(ticker);
		getRecommendList(ticker);
		setIsLoad(false);
	}, [ticker]);

	return isLoad ? null : (
		<div className="container">
			<div className="company-chart-view">
				<RecommendList stockList={recommendList} />
				<div className="company-chart">
					<div className="company-title shadow-box">
						<StockItem companyInfo={companyInfo.data} />
					</div>
					<StockDetailChartContainer chartData={companyInfo.chart} />
				</div>
			</div>
			<div className="vertical-line" />
			<DashBoard companyInfo={companyInfo} dashBoardInfo={companyInfo.data} />
		</div>
	);
};

export default Company;
