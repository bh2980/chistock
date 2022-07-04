import dummy from 'assets/dummy';
import React, { useEffect, useState } from 'react';
import Earning from './DashBoardItem/Earning';
import Financial from './DashBoardItem/Financial';
import News from './DashBoardItem/News';
import Profile from './DashBoardItem/Profile';
import RecommendTrend from './DashBoardItem/RecommendTrend';
import './styles/DashBoard.scss';

const DashBoard = ({ ticker }) => {
	const [loading, setLoading] = useState(true);
	const [dashboardInfo, setDashboardInfo] = useState(null);

	const getDashboard = ticker => {
		const { quoteType, summaryProfile, recommendationTrend, earnings } = dummy.AppleSummary;
		const { sector, longBusinessSummary, website, industry, country } = summaryProfile;
		const { shortName, symbol } = quoteType;
		const { logo } = dummy.AppleProfile;
		const news = dummy.AppleNews;

		setDashboardInfo({
			symbol,
			logo,
			shortName,
			sector,
			summary: longBusinessSummary,
			website,
			industry,
			country,
			recommendationTrend,
			earnings,
			news,
		});
	};

	useEffect(() => {
		getDashboard(ticker);
		setLoading(false);
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
