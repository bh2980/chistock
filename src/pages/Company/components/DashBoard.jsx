import React from 'react';
import '../css/DashBoard.scss';
import Financial from './Financial';
import RecommendTrend from './RecommendTrend';
import Earning from './Earning';
import Profile from './Profile';
import News from './News';

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
