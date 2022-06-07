import React, { useState } from 'react';
import StockView from '../StockView';
import dummy from 'assets/dummy';

const StockViewContainer = ({ companyInfo, chartData, recommendList }) => {
	const [recomViewList, setrecomViewList] = useState(recommendList.slice(0, 5));

	const onClickRecommend = index => {
		setrecomViewList(recommendList[index]);
	};

	return (
		<StockView companyInfo={companyInfo} chartData={chartData} recomViewList={recomViewList} />
	);
};

export default StockViewContainer;
