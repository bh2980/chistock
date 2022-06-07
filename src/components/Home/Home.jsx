import React, { useEffect, useState } from 'react';
import './style/index.scss';
import StockViewContainer from 'components/Stock/container/StockViewComtainer';
import dummy from 'assets/dummy.js';
import StockItem from 'components/Stock/StockItem';
import { Link } from 'react-router-dom';

const Home = ({ isChartLoading, itemList }) => {
	return (
		<div className="home">
			{isChartLoading ? (
				<span>Loading</span>
			) : (
				<>
					<StockViewContainer companyInfo={dummy.SNPInfo} />
					<div className="line" />
					<div className="right-area shadow-box">
						<div className="active-title">Trending</div>
						<div className="stock-list">
							{itemList.map(item => (
								<>
									<Link to={`/detail/${item.quoteType.symbol}`}>
										<button className="trending-item">
											<StockItem companyInfo={item} />
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
