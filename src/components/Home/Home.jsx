import React, { useState, useEffect } from 'react';
import dummy from 'assets/dummy';
import './style/index.scss';
import StockItem from 'components/Stock/StockItem';
import { Link } from 'react-router-dom';
import StockLineChartContainer from 'components/Stock/container/StockLineChartContainer';
import IndexListContainer from './IndexList';

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
		const newNews = dummy.MarketNews.stream.map(anews => {
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
		<div className="home">
			{isChartLoading ? (
				<span>Loading</span>
			) : (
				<>
					<div className="home-chart-view">
						<IndexListContainer stockList={marketSummary} setViewStock={setViewStock} />
						<div className="main-chart">
							<div className="main-title shadow-box">
								<StockItem companyInfo={viewStock.data} />
							</div>
							<StockLineChartContainer chartData={viewStock.chart} canCandle={false} />
						</div>
					</div>
					<div className="line" />
					<div className="right-area shadow-box">
						<div className="side-title">
							<button
								className={selectedSide === 'Trending' ? 'selected' : 'unselected'}
								onClick={onSideClick}
							>
								Trending
							</button>
							<button
								className={selectedSide !== 'Trending' ? 'selected' : 'unselected'}
								onClick={onSideClick}
							>
								News
							</button>
						</div>
						<div className="stock-list">
							{selectedSide !== 'Trending'
								? news.map(anews => (
										<a
											key={anews.id}
											href={
												anews.content.clickThroughUrl ? anews.content.clickThroughUrl.url : null
											}
										>
											<button className="news-item">
												<div>
													<span className="news-title">{anews.content.title}</span>
													<div className="news-date">
														{anews.content.provider.displayName} / {anews.content.pubDate}
													</div>
												</div>
												{anews.content.thumbnail ? (
													<img
														src={anews.content.thumbnail.resolutions[0].url}
														alt={anews.content.title}
													/>
												) : null}
											</button>
										</a>
								  ))
								: trendingList.map((trendingItem, index) => (
										<Link key={index} to={`/detail/${trendingItem.symbol}`}>
											<button key={index} className="trending-item">
												<StockItem companyInfo={trendingItem} />
											</button>
										</Link>
								  ))}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default HomeContainer;
