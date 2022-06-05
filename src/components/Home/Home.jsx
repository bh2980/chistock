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
					<StockView quote={dummy.NASDAQDummy} />
					<div className="line" />
					<div className="right-area">
						<div className="active-title">Most Active Stock</div>
						<div className="stock-list">
							{itemList.map(item => (
								<Link to={`/detail/${item.symbol}`}>
									<button class="item-btn">
										<StockItem quote={item} />
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
