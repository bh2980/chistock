import StockTileList from 'components/Stock/StockTileList';
import React, { useEffect, useState } from 'react';
import './styles/RecommendList.scss';
import { useHistory } from 'react-router-dom';
import { getRecommendations } from 'lib/fetchData';

const RecommendList = ({ symbol }) => {
	let history = useHistory();

	const [recommendList, setRecommendList] = useState([]);
	//CHECK : 화면 표시를 위해 loading 시켜놓음. 리팩토링 시 제거
	const [loading, setLoading] = useState(true);

	const getRecommendList = async symbol => {
		const { data } = await getRecommendations(symbol);

		setRecommendList(data);
		//CHECK : 화면 표시를 위해 loading 시켜놓음. 리팩토링 시 제거
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
