import React from 'react';
import '../css/DashBoard.css';
import ReactApexChart from 'react-apexcharts';
import FinancialsContainer from '../container/FinancialsContainer';

const DashBoard = ({ isLoad, recommendData, recommendOptions, dashBoardInfo }) => {
	return isLoad ? null : (
		<div className="dashboard">
			<div className="card shadow-box">
				<FinancialsContainer dashBoardInfo={dashBoardInfo} />
			</div>
			<div className="card shadow-box">
				<div className="card-title">Recommendation Trends</div>
				<ReactApexChart
					series={recommendData}
					options={recommendOptions}
					type="bar"
					width={'100%'}
					height={'300px'}
				/>
			</div>
		</div>
	);
};

export default DashBoard;
