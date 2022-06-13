import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Financials = ({
	isLoad,
	financialSeries,
	financialOptions,
	financePeriod,
	onFinanceChange,
}) => {
	return (
		<>
			{isLoad ? null : (
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
						width={'100%'}
						height={'300px'}
					/>
				</>
			)}
		</>
	);
};

export default Financials;
