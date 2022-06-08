import StockTileList from 'components/Stock/StockTileList';
import React, { useState } from 'react';

const IndexListContainer = ({ stockList, setViewStock }) => {
	const newStockList = stockList.slice(0, 5);
	const onClick = (e, index) => {
		setViewStock(stockList[index]);
	};

	return <StockTileList stockList={newStockList} onClick={onClick} />;
};

export default IndexListContainer;
