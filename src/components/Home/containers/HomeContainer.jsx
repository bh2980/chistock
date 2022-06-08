import React, { useState, useEffect } from 'react';
import Home from '../Home';
import dummy from 'assets/dummy';

const HomeContainer = () => {
	const [isChartLoading, setIsChartLoading] = useState(true);
	const [marketSummary, setMarketSummary] = useState(null);
	const [trendingList, setTrendingList] = useState(null);
	const [viewStock, setViewStock] = useState(null);
	const [selectedSide, setSelectedSide] = useState('Trending');
	const [news, setNews] = useState([]);

	const onSideClick = e => {
		setSelectedSide(e.currentTarget.textContent);
	};

	const getTrending = () => {
		const newTrending = dummy.TrendingStock[0].quotes;
		setTrendingList(newTrending);
	};

	const getNews = () => {
		const newNews = dummy.News.stream.map(anews => {
			const { content } = anews;
			const { pubDate, title } = content;
			return {
				...anews,
				content: {
					...content,
					pubDate: pubDate.replace('T', ' ').replace('Z', ''),
					title: title.length > 70 ? title.slice(0, 50) + '...' : title,
				},
			};
		});

		setNews(newNews);
	};

	const getMarketItem = () => {
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
		getMarketItem();
		getTrending();
		getNews();
		setIsChartLoading(false);
	}, []);

	return (
		<Home
			isChartLoading={isChartLoading}
			viewStock={viewStock}
			setViewStock={setViewStock}
			marketSummary={marketSummary}
			trendingList={trendingList}
			news={news}
			selectedSide={selectedSide}
			onSideClick={onSideClick}
		/>
	);
};

export default HomeContainer;
