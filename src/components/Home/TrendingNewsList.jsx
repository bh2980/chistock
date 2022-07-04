import dummy from 'assets/dummy';
import './styles/TrendingNewsList.scss';
import StockItem from 'components/Stock/StockItem';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TrendingNewsList = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [trendingList, setTrendingList] = useState(null);
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

	useEffect(() => {
		getTrending();
		getNews();
		setIsLoading(false);
	}, []);

	return isLoading ? null : (
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
								href={anews.content.clickThroughUrl ? anews.content.clickThroughUrl.url : null}
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
	);
};

export default TrendingNewsList;
