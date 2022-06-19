import React, { useEffect, useState } from 'react';
import './style/index.scss';
import StockItem from 'components/Stock/StockItem';
import { Link } from 'react-router-dom';
import StockLineChartContainer from 'components/Stock/container/StockLineChartContainer';
import IndexListContainer from './containers/IndexListContainer';

const Home = ({
	isChartLoading,
	viewStock,
	setViewStock,
	marketSummary,
	trendingList,
	news,
	selectedSide,
	onSideClick,
}) => {
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

export default Home;
