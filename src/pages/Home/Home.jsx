import React, { useState } from 'react';
import './style/index.scss';
import IndexList from '../../components/Home/IndexList';
import HomeChart from 'components/Home/HomeChart';
import TrendingNewsList from 'components/Home/TrendingNewsList';

const Home = () => {
	const [viewStock, setViewStock] = useState(null);

	return (
		<div className="home">
			<IndexList setViewStock={setViewStock} />
			<HomeChart viewStock={viewStock} />
			<div className="line" />
			<TrendingNewsList />
		</div>
	);
};

export default Home;
