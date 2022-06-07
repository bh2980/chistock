import StockTileList from 'components/Stock/StockTileList';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecommendListContainer = ({ stockList }) => {
	const navigate = useNavigate();
	const onClick = (e, index) => {
		console.log(stockList[index].data.symbol);
		navigate(`/detail/${stockList[index].data.symbol}`);
	};

	return <StockTileList stockList={stockList} onClick={onClick} />;
};

export default RecommendListContainer;
