import React, { useState, useEffect } from 'react';
import Home from '../Home';
import dummy from 'assets/dummy';

const HomeContainer = () => {
	const [isChartLoading, setIsChartLoading] = useState(true);
	const [itemList, setItemList] = useState([
		dummy.SNPInfo,
		dummy.SNPInfo,
		dummy.SNPInfo,
		dummy.SNPInfo,
		dummy.SNPInfo,
	]);

	useEffect(() => {
		setIsChartLoading(false);
	});

	return <Home isChartLoading={isChartLoading} itemList={itemList} />;
};

export default HomeContainer;
