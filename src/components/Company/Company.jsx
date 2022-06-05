import React from 'react';
import StockView from '../Stock/StockView';
import './css/Company.scss';

const Company = ({ profile, quote }) => {
	return (
		<div className="container">
			<StockView quote={quote} />
			<div className="vertical-line" />
			<div className="summary shadow-box">
				<div className="summary-title">회사 개요</div>
				<div className="summary-detail">
					<div className="logo"></div>
					<table class="summary-table">
						<tr>
							<td className="logo" colSpan={2}>
								<img src={profile.image} alt={profile.companyName} />
							</td>
						</tr>
						<tr>
							<td className="table-attr">거래소</td>
							<td>{profile.exchangeShortName}</td>
						</tr>
						<tr>
							<td className="table-attr">섹터</td>
							<td>{profile.sector}</td>
						</tr>
						<tr>
							<td className="table-attr">CEO</td>
							<td>{profile.ceo}</td>
						</tr>
						<tr>
							<td className="table-attr">홈페이지</td>
							<td>{profile.website}</td>
						</tr>
						<tr>
							<td colSpan={2}>{profile.description}</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Company;
