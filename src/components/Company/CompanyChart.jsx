import StockDetailChart from 'components/Stock/StockDetailChart';
import StockItem from 'components/Stock/StockItem';
import { getStockSummary } from 'lib/fetchData';
import React, { useState, useEffect } from 'react';
import './styles/CompanyChart.scss';

const CompanyChart = ({ ticker }) => {
	const [companyInfo, setCompanyInfo] = useState(null);
	//CHECK : 화면 표시를 위해 loading 시켜놓음. 리팩토링 시 제거
	const [loading, setLoading] = useState(true);

	const getCompanyInfo = async ticker => {
		const { data } = await getStockSummary(ticker);
		const { quoteType, price } = data;
		const { shortName, symbol } = quoteType;
		const { regularMarketChange, regularMarketChangePercent, regularMarketPrice } = price;

		setCompanyInfo({
			shortName,
			symbol,
			regularMarketChange: regularMarketChange.raw,
			regularMarketChangePercent: regularMarketChangePercent.raw,
			regularMarketPrice: regularMarketPrice.raw,
		});

		//CHECK : 화면 표시를 위해 loading 시켜놓음. 리팩토링 시 제거
		setLoading(false);
	};

	useEffect(() => {
		getCompanyInfo(ticker);
	}, []);

	return loading ? null : (
		<div className="company-chart">
			<div className="company-title shadow-box">
				<StockItem companyInfo={companyInfo} />
			</div>
			<StockDetailChart ticker={ticker} />
		</div>
	);
};

export default CompanyChart;
