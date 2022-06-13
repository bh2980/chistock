import React, { useEffect, useState } from 'react';
import Company from '../Company';
import dummy from 'assets/dummy.js';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const CompanyContainer = () => {
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
		getCompanyInfo(ticker);
		getRecommendList(ticker);
		setIsLoad(false);
	}, []);

	return <Company isLoad={isLoad} companyInfo={companyInfo} recommendList={recommendList} />;
};

export default CompanyContainer;
