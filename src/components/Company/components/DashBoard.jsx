import React from 'react';
import '../css/DashBoard.css';
import FinancialsContainer from '../container/FinancialsContainer';
import RecommendTrendContainer from '../container/RecommendTrendContainer';
import EarningContainer from '../container/EarningContainer';
import ProfileContainer from '../container/ProfileContainer';
import NewsContainer from '../container/NewsContainer';

const DashBoard = ({ companyInfo, dashBoardInfo }) => {
	return (
		<div className="dashboard">
			<div className="card shadow-box">
				<ProfileContainer companyInfo={companyInfo} />
			</div>
			<div className="card shadow-box">
				<NewsContainer companyInfo={companyInfo} />
			</div>
			<div className="card shadow-box">
				<FinancialsContainer dashBoardInfo={dashBoardInfo} />
			</div>
			<div className="card shadow-box">
				<EarningContainer dashBoardInfo={dashBoardInfo} />
			</div>
			<div className="card shadow-box">
				<RecommendTrendContainer dashBoardInfo={dashBoardInfo} />
			</div>
		</div>
	);
};

export default DashBoard;
