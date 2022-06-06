import React, { useEffect, useState } from 'react';
import './style/index.scss';
import StockView from 'components/Stock/StockView';
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
					<StockView companyInfo={dummy.SNPInfo} />
					<div className="line" />
					<div className="right-area shadow-box">
						<div className="active-title">Trending</div>
						<div className="stock-list">
							{itemList.map(item => (
								<>
									<Link to={`/detail/${item.quoteType.symbol}`}>
										<button className="item-btn">
											<StockItem className="item" companyInfo={item} />
										</button>
									</Link>
									<div className="horizontal-divider"></div>
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
