import dummy from 'assets/dummy';
import StockDetailChart from 'components/Stock/StockDetailChart';
import StockItem from 'components/Stock/StockItem';
import React, { useState, useEffect } from 'react';
import './styles/CompanyChart.scss';

const CompanyChart = ({ ticker }) => {
	const [companyInfo, setCompanyInfo] = useState(null);
	const [loading, setLoading] = useState(true);

	const getCompanyInfo = ticker => {
		const { price, quoteType } = dummy.AppleSummary;
		const { shortName, symbol } = quoteType;
		const { regularMarketChange, regularMarketChangePercent, regularMarketPrice } = price;

		setCompanyInfo({
			shortName,
			symbol,
			regularMarketChange: regularMarketChange.raw,
			regularMarketChangePercent: regularMarketChangePercent.raw,
			regularMarketPrice: regularMarketPrice.raw,
		});
	};

	useEffect(() => {
		getCompanyInfo(ticker);
		setLoading(false);
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
