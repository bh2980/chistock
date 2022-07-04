import StockTileList from 'components/Stock/StockTileList';
import React, { useEffect, useState } from 'react';
import './styles/RecommendList.scss';
import { useHistory } from 'react-router-dom';
import dummy from 'assets/dummy';

const RecommendList = ({ ticker }) => {
	let history = useHistory();

	const [recommendList, setRecommendList] = useState([]);
	const [loading, setLoading] = useState(true);

	const getRecommendList = ticker => {
		const response = dummy.AppleRecommend[0].quotes;
		const newRecommendList = response.map(item => {
			const {
				regularMarketChange,
				regularMarketChangePercent,
				regularMarketPrice,
				symbol,
				shortName,
			} = item;
			return {
				data: {
					regularMarketChange,
					regularMarketChangePercent,
					regularMarketPrice,
					symbol,
					shortName,
				},
			};
		});

		setRecommendList(newRecommendList);
	};

	const onClick = (e, index) => {
		history.push(`/detail/${recommendList[index].data.symbol}`);
	};

	useEffect(() => {
		getRecommendList(ticker);
		setLoading(false);
	}, []);

	return loading ? null : (
		<div className="recommend-list">
			<StockTileList stockList={recommendList} onClick={onClick} />
		</div>
	);
};

export default RecommendList;
