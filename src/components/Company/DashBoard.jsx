import dummy from 'assets/dummy';
import { getCompanyNews, getStockProfile, getStockSummary } from 'lib/fetchData';
import React, { useEffect, useState } from 'react';
import Earning from './DashBoardItem/Earning';
import Financial from './DashBoardItem/Financial';
import News from './DashBoardItem/News';
import Profile from './DashBoardItem/Profile';
import RecommendTrend from './DashBoardItem/RecommendTrend';
import './styles/DashBoard.scss';

const DashBoard = ({ ticker }) => {
	const token = process.env.REACT_APP_FH_API_KEY;
	const [loading, setLoading] = useState(true);
	const [dashboardInfo, setDashboardInfo] = useState(null);

	//TODO 이장훈 : 하나의 api에서 loading해와서 타일별로 로딩을 나누기 애매
	const getDashboard = async ticker => {
		const { data } = await getStockSummary();
		const { quoteType, summaryProfile, recommendationTrend, earnings } = data;

		const { sector, longBusinessSummary, website, industry, country } = summaryProfile;
		const { shortName, symbol } = quoteType;

		const logo = await getStockProfile(ticker, token);
		//TODO 이장훈 : 임시 날짜 변경
		const news = await getCompanyNews('20220202', '20220202', ticker);

		//TODO 이장훈 : logo, news 어떻게 해야 깔끔하게 할 수 있을까?
		setDashboardInfo({
			symbol,
			logo: logo.data.logo,
			shortName,
			sector,
			summary: longBusinessSummary,
			website,
			industry,
			country,
			recommendationTrend,
			earnings,
			news: news.data.slice(0, 5),
		});

		setLoading(false);
	};

	useEffect(() => {
		getDashboard(ticker);
	}, []);

	return loading ? null : (
		<div className="dashboard">
			<div className="card shadow-box profile-card">
				<Profile dashboardInfo={dashboardInfo} />
			</div>
			<div className="card shadow-box news-card">
				<News dashboardInfo={dashboardInfo} />
			</div>
			<div className="card shadow-box financials-card">
				<Financial dashBoardInfo={dashboardInfo} />
			</div>
			<div className="card shadow-box earning-card">
				<Earning dashBoardInfo={dashboardInfo} />
			</div>
			<div className="card shadow-box recommend-card">
				<RecommendTrend dashBoardInfo={dashboardInfo} />
			</div>
		</div>
	);
};

export default DashBoard;
