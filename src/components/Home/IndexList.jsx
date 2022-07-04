import dummy from 'assets/dummy';
import './styles/IndexList.scss';
import StockTileList from 'components/Stock/StockTileList';
import React, { useEffect, useState } from 'react';

const IndexList = ({ setViewStock }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [marketSummary, setMarketSummary] = useState(null);

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

		setMarketSummary(newMarketSum.slice(0, 5));
		setViewStock(newMarketSum[0]);
	};

	const onClick = (e, index) => {
		setViewStock(marketSummary[index]);
	};

	useEffect(() => {
		getMarketItem();
		setIsLoading(false);
	}, []);

	return isLoading ? null : (
		<div className="trending-news-list">
			<StockTileList stockList={marketSummary} onClick={onClick} />
		</div>
	);
};

export default IndexList;
