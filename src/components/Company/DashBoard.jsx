import Earning from './DashBoardItem/Earning';
import Financial from './DashBoardItem/Financial';
import News from './DashBoardItem/News';
import Profile from './DashBoardItem/Profile';
import RecommendTrend from './DashBoardItem/RecommendTrend';
import './styles/DashBoard.scss';

const DashBoard = ({ ticker }) => {
	return (
		<div className="dashboard">
			<div className="card shadow-box profile-card">
				<Profile ticker={ticker} />
			</div>
			<div className="card shadow-box news-card">
				<News ticker={ticker} />
			</div>
			<div className="card shadow-box financials-card">
				<Financial ticker={ticker} />
			</div>
			<div className="card shadow-box earning-card">
				<Earning ticker={ticker} />
			</div>
			<div className="card shadow-box recommend-card">
				<RecommendTrend ticker={ticker} />
			</div>
		</div>
	);
};

export default DashBoard;
