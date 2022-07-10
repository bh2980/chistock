import StockTileList from 'components/Stock/StockTileList';
import React, { useEffect, useState } from 'react';
import './styles/RecommendList.scss';
import { useHistory } from 'react-router-dom';
import { getRecommendations } from 'lib/fetchData';

const RecommendList = ({ symbol }) => {
	let history = useHistory();

	const [recommendList, setRecommendList] = useState([]);
	const [loading, setLoading] = useState(true);

	const getRecommendList = async symbol => {
		const { data } = await getRecommendations(symbol);

		console.log('recommend', data);

		setRecommendList(data);
		setLoading(false);
	};

	const onClick = (e, index) => {
		history.push(`/detail/${recommendList[index].data.symbol}`);
	};

	useEffect(() => {
		getRecommendList(symbol);
	}, []);

	return loading ? null : (
		<div className="recommend-list">
			<StockTileList stockList={recommendList} onClick={onClick} />
		</div>
	);
};

export default RecommendList;
