import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RecommendTrend = ({ recommendSeries, recommendOptions }) => {
	return (
		<>
			<div className="card-title">Recommendation Trends</div>
			<ReactApexChart
				series={recommendSeries}
				options={recommendOptions}
				type="bar"
				height="280px"
			/>
		</>
	);
};

export default RecommendTrend;
