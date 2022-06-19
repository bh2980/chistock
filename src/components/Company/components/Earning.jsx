import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Earning = ({ earningSeries, earningOptions }) => {
	return (
		<>
			<div className="card-title">Earnings</div>
			<ReactApexChart
				series={earningSeries}
				options={earningOptions}
				type="scatter"
				height="280px"
			/>
		</>
	);
};

export default Earning;
