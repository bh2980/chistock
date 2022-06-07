import React, { useEffect, useState } from 'react';
import './style/index.scss';
import dummy from 'assets/dummy.js';
import StockItem from 'components/Stock/StockItem';
import { Link } from 'react-router-dom';
import StockLineChartContainer from 'components/Stock/container/StockLineChartContainer';
import IndexListContainer from './containers/IndexListContainer';

const Home = ({ isChartLoading, viewStock, setViewStock, marketSummary, trendingList }) => {
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
							<StockLineChartContainer chartData={viewStock.chart} />
						</div>
					</div>
					<div className="line" />
					<div className="right-area shadow-box">
						<div className="trending-title">Trending</div>
						<div className="stock-list">
							{trendingList.map(trendingItem => (
								<>
									<Link to={`/detail/${trendingItem.symbol}`}>
										<button className="trending-item">
											<StockItem companyInfo={trendingItem} />
										</button>
									</Link>
								</>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Home;
