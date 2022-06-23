import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import './css/Financial.scss';

const Financial = ({ dashBoardInfo }) => {
	const [isLoad, setIsLoad] = useState(true);
	const [financePeriod, setFinancePeriod] = useState('Quarter');
	const [financialData, setFinanciaData] = useState();
	const [financialSeries, setFinanciaSeries] = useState();
	const [financialOptions, setFinanciaOptions] = useState();

	const onFinanceChange = e => {
		setFinancePeriod(e.target.innerText);

		if (e.target.innerText === 'Quarter') {
			financeSeriesSet(financialData.quarterly.earning, financialData.quarterly.revenue);
			financeOptionSet(financialData.quarterly.xlabel);
		} else {
			financeSeriesSet(financialData.yearly.earning, financialData.yearly.revenue);
			financeOptionSet(financialData.yearly.xlabel);
		}
	};

	const financeSeriesSet = (earning, revenue) => {
		setFinanciaSeries([
			{
				name: '당기순이익',
				type: 'bar',
				data: earning,
			},
			{
				name: '매출',
				type: 'bar',
				data: revenue,
			},
		]);
	};

	const financeOptionSet = xLabel => {
		setFinanciaOptions({
			chart: {
				type: 'bar',
				height: 350,
				toolbar: {
					show: false,
					tools: {
						download: false,
						selection: false,
						zoom: false,
						zoomin: false,
						zoomout: false,
						pan: false,
						reset: true,
					},
				},
			},
			dataLabels: {
				enabled: false,
			},
			plotOptions: {
				bar: {
					horizontal: false,
					borderRadius: 8,
				},
			},
			stroke: {
				width: 1,
				colors: ['#fff'],
			},
			xaxis: {
				categories: xLabel,
				labels: {
					formatter: function (val) {
						return val.length > 5 ? val.substring(4) + ' ' + val.substring(0, 2) : val;
					},
				},
			},
			yaxis: {
				labels: {
					formatter: function (val) {
						return val / 1000000000 + ' B';
					},
				},
			},
			tooltip: {
				enabled: true,
			},
			fill: {
				opacity: 1,
			},
			legend: {
				position: 'bottom',
				height: 20,
				horizontalAlign: 'center',
				offsetX: -20,
			},
		});
	};

	const getFinancialData = () => {
		const { earnings } = dashBoardInfo;
		const { financialsChart } = earnings;
		const { quarterly, yearly } = financialsChart;

		const quarterXLabel = quarterly.map(finaince => {
			return finaince.date;
		});
		const quarterEarning = quarterly.map(finaince => {
			return finaince.earnings.raw;
		});
		const quarterRevenue = quarterly.map(finaince => {
			return finaince.revenue.raw;
		});

		const yearXLabel = yearly.map(finaince => {
			return finaince.date;
		});
		const yearEarning = yearly.map(finaince => {
			return finaince.earnings.raw;
		});
		const yearRevenue = yearly.map(finaince => {
			return finaince.revenue.raw;
		});

		return {
			quarterly: { xlabel: quarterXLabel, earning: quarterEarning, revenue: quarterRevenue },
			yearly: { xlabel: yearXLabel, earning: yearEarning, revenue: yearRevenue },
		};
	};

	useEffect(() => {
		const data = getFinancialData();
		setFinanciaData(data);
		financeSeriesSet(data.quarterly.earning, data.quarterly.revenue);
		financeOptionSet(data.quarterly.xlabel);
		setIsLoad(false);
	}, []);

	return isLoad ? null : (
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

export default Financial;
