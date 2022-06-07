import React, { useState, useEffect } from 'react';
import Home from '../Home';
import dummy from 'assets/dummy';

const HomeContainer = () => {
	const [isChartLoading, setIsChartLoading] = useState(true);
	const [marketSummary, setMarketSummary] = useState(null);
	const [trendingList, setTrendingList] = useState(dummy.TrendingStock[0].quotes);
	const [viewStock, setViewStock] = useState(null);

	const makeMarketItem = () => {
		const marketSum = dummy.MarketSummary;
		const newMarketSum = marketSum.map(marketItem => {
			const { symbol, shortName, spark } = marketItem;
			const { timestamp, previousClose, close } = spark;
			const regularMarketPrice = close[close.length - 1];
			const regularMarketChange = regularMarketPrice - previousClose;
			const regularMarketChangePercent = regularMarketChange / previousClose;

			return {
				data: {
					symbol,
					shortName,
					regularMarketPrice,
					regularMarketChange,
					regularMarketChangePercent,
				},
				chart: { shortName, timestamp, close },
			};
		});

		setMarketSummary(newMarketSum);
		setViewStock(newMarketSum[0]);
	};

	useEffect(() => {
		makeMarketItem();
		setIsChartLoading(false);
	}, []);

	return (
		<Home
			isChartLoading={isChartLoading}
			viewStock={viewStock}
			setViewStock={setViewStock}
			marketSummary={marketSummary}
			trendingList={trendingList}
		/>
	);
};

export default HomeContainer;
