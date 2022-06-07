import React from 'react';
import StockViewContainer from 'components/Stock/container/StockViewComtainer';
import './css/Company.scss';
import RecommendListContainer from './container/RecommendListContainer';
import StockItem from 'components/Stock/StockItem';
import StockLineChartContainer from 'components/Stock/container/StockLineChartContainer';

const Company = ({ isLoad, companyInfo, recommendList }) => {
	return isLoad ? null : (
		<div className="container">
			<div className="company-chart-view">
				<RecommendListContainer stockList={recommendList} />
				<div className="company-chart">
					<div className="company-title shadow-box">
						<StockItem companyInfo={companyInfo.data} />
					</div>
					<StockLineChartContainer chartData={companyInfo.chart} />
				</div>
			</div>
			<div className="vertical-line" />
			<div className="summary shadow-box">
				<div className="summary-detail">
					<div className="logo"></div>
					<table className="summary-table">
						<tbody>
							<tr>
								<td className="table-attr">거래소</td>
								<td>{companyInfo.data.exchangeName}</td>
							</tr>
							<tr>
								<td className="table-attr">섹터</td>
								<td>{companyInfo.data.sector}</td>
							</tr>
							<tr>
								<td className="table-attr">홈페이지</td>
								<td>{companyInfo.data.website}</td>
							</tr>
							<tr>
								<td colSpan={2}>{companyInfo.data.summary}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Company;
