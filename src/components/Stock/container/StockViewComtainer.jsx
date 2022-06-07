import React, { useState } from 'react';
import StockView from '../StockView';
import dummy from 'assets/dummy';

const StockViewContainer = ({ companyInfo }) => {
	const [recommendList, setRecommendList] = useState([
		dummy.SNPInfo,
		dummy.SNPInfo,
		dummy.SNPInfo,
		dummy.SNPInfo,
		dummy.SNPInfo,
	]);

	return <StockView companyInfo={companyInfo} recommendList={recommendList} />;
};

export default StockViewContainer;
