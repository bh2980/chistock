import './styles/IndexList.scss';
import StockTileList from 'components/Stock/StockTileList';
import React, { useEffect, useState } from 'react';
import { getMarketSummary } from 'lib/fetchData';

const IndexList = ({ setViewStock }) => {
	//CHECK : 화면 표시를 위해 loading 시켜놓음. 리팩토링 시 제거
	const [isLoading, setIsLoading] = useState(true);
	const [marketSummary, setMarketSummary] = useState(null);

	const getMarketItem = async () => {
		const { data } = await getMarketSummary();

		//TODO 이장훈 : 임시로 데이터 잘라서 표현 중 -> 주기적으로 돌도록 수정할 것.
		setMarketSummary(data.slice(0, 5));
		setViewStock(data[0]);
		//CHECK : 화면 표시를 위해 loading 시켜놓음. 리팩토링 시 제거
		setIsLoading(false);
	};

	const onClick = (e, index) => {
		setViewStock(marketSummary[index]);
	};

	useEffect(() => {
		getMarketItem();
	}, []);

	return isLoading ? null : (
		<div className="trending-news-list">
			<StockTileList stockList={marketSummary} onClick={onClick} />
		</div>
	);
};

export default IndexList;
