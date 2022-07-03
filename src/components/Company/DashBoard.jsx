import React from 'react';
import Earning from './DashBoardItem/Earning';
import Financial from './DashBoardItem/Financial';
import News from './DashBoardItem/News';
import Profile from './DashBoardItem/Profile';
import RecommendTrend from './DashBoardItem/RecommendTrend';
import './styles/DashBoard.scss';

const DashBoard = ({ companyInfo, dashBoardInfo }) => {
	return (
		<div className="dashboard">
			<div className="card shadow-box profile-card">
				<Profile companyInfo={companyInfo} />
			</div>
			<div className="card shadow-box news-card">
				<News companyInfo={companyInfo} />
			</div>
			<div className="card shadow-box financials-card">
				<Financial dashBoardInfo={dashBoardInfo} />
			</div>
			<div className="card shadow-box earning-card">
				<Earning dashBoardInfo={dashBoardInfo} />
			</div>
			<div className="card shadow-box recommend-card">
				<RecommendTrend dashBoardInfo={dashBoardInfo} />
			</div>
		</div>
	);
};

export default DashBoard;
