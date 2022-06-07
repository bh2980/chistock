import StockTileList from 'components/Stock/StockTileList';
import React from 'react';
import { useHistory } from 'react-router-dom';

const RecommendListContainer = ({ stockList }) => {
	let history = useHistory();
	const onClick = (e, index) => {
		console.log(stockList[index].data.symbol);
		history.push(`/detail/${stockList[index].data.symbol}`);
	};

	return <StockTileList stockList={stockList} onClick={onClick} />;
};

export default RecommendListContainer;
