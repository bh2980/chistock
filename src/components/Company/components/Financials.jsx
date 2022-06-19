import React from 'react';
import ReactApexChart from 'react-apexcharts';
import '../css/Financials.scss';

const Financials = ({ financialSeries, financialOptions, financePeriod, onFinanceChange }) => {
	return (
		<>
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
				series={financialSeries}
				options={financialOptions}
				type="bar"
				height="280px"
			/>
		</>
	);
};

export default Financials;
