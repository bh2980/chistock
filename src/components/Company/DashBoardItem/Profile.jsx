import { getStockSummary } from 'lib/fetchData';
import React, { useState, useEffect } from 'react';
import './styles/Profile.scss';

const Profile = ({ ticker }) => {
	const [isLoad, setIsLoad] = useState(true);
	const [isFold, setIsFold] = useState(true);
	const [profile, setProfile] = useState();

	const reverseFold = () => {
		setIsFold(current => !current);
	};

	const getProfile = async ticker => {
		const { data } = await getStockSummary(ticker);
		const { quoteType, summaryProfile } = data;
		const { sector, longBusinessSummary, website, industry, country } = summaryProfile;
		const { shortName, symbol } = quoteType;

		console.log(shortName, symbol);

		setProfile({
			symbol,
			shortName,
			sector,
			summary: longBusinessSummary,
			website,
			industry,
			country,
		});

		setIsLoad(false);
	};

	useEffect(() => {
		getProfile(ticker);
	}, []);
	return isLoad ? null : (
		<div className="profile-wrapper">
			<div className="profile-title">
				<div className="profile-name">{profile.shortName}</div>
				<div className="profile-symbol">{profile.symbol}</div>
			</div>
			<table className="profile-table">
				<tbody>
					<tr>
						<th>Industry</th>
						<td>{profile.industry}</td>
					</tr>
					<tr>
						<th>Sector</th>
						<td>{profile.sector}</td>
					</tr>
					<tr>
						<th>Website</th>
						<td>{profile.website}</td>
					</tr>
				</tbody>
			</table>
			<div className={isFold ? 'profile-summary fold' : 'profile-summary'}>{profile.summary}</div>
			<div className="dashboard-profile-more-btn">
				<button onClick={reverseFold}>{isFold ? '더보기' : '닫기'}</button>
			</div>
		</div>
	);
};

export default Profile;
