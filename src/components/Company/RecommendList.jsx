import StockTileList from 'components/Stock/StockTileList';
import React from 'react';
import './styles/RecommendList.scss';
import { useHistory } from 'react-router-dom';

const RecommendList = ({ stockList }) => {
	let history = useHistory();

	const onClick = (e, index) => {
		history.push(`/detail/${stockList[index].data.symbol}`);
	};

	return (
		<div className="recommend-list">
			<StockTileList stockList={stockList} onClick={onClick} />
		</div>
	);
};

export default RecommendList;
