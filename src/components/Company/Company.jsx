import React from 'react';
import StockView from '../Stock/StockView';
import './css/Company.scss';

const Company = ({ companyInfo }) => {
	return (
		<div className="container">
			<StockView companyInfo={companyInfo} />
			<div className="vertical-line" />
			<div className="summary shadow-box">
				<div className="summary-detail">
					<div className="logo"></div>
					<table class="summary-table">
						<tr></tr>
						<tr>
							<td className="table-attr">거래소</td>
							<td>{companyInfo.price.exchangeName}</td>
						</tr>
						<tr>
							<td className="table-attr">섹터</td>
							<td>{companyInfo.summaryProfile.sector}</td>
						</tr>
						<tr>
							<td className="table-attr">홈페이지</td>
							<td>{companyInfo.summaryProfile.website}</td>
						</tr>
						<tr>
							<td colSpan={2}>{companyInfo.summaryProfile.longBusinessSummary}</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Company;
