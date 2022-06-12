import React from 'react';
import '../css/DashBoard.css';
import ReactApexChart from 'react-apexcharts';

const DashBoard = ({
	isLoad,
	recommendData,
	recommendOptions,
	financialData,
	financialOptions,
	financePeriod,
	onFinanceChange,
}) => {
	return isLoad ? null : (
		<div className="dashboard">
			<div className="card shadow-box">
				<div className="top" />
				<div className="card-title">
					<span>Financials</span>
					<div className="sub-menu">
						<button
							className={financePeriod === 'Quarter' ? 'selected-menu' : 'unselected-menu'}
							onClick={onFinanceChange}
						>
							Quarter
						</button>
						<button
							className={financePeriod === 'Year' ? 'selected-menu' : 'unselected-menu'}
							onClick={onFinanceChange}
						>
							Year
						</button>
					</div>
				</div>
				<ReactApexChart
					series={financialData}
					options={financialOptions}
					type="bar"
					width={'100%'}
					height={'300px'}
				/>
				<div className="bottom" />
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
