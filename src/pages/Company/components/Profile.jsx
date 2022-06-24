import React, { useState, useEffect } from 'react';
import '../css/Profile.scss';

const Profile = ({ companyInfo }) => {
	const [isLoad, setIsLoad] = useState(true);
	const [isFold, setIsFold] = useState(true);
	const [profile, setProfile] = useState();

	const reverseFold = () => {
		setIsFold(current => !current);
	};

	const getProfile = () => {
		const { data } = companyInfo;
		const { website } = data;

		const newProfile = { ...data, website: website.slice(8) };
		setProfile(newProfile);
	};

	useEffect(() => {
		getProfile();
		setIsLoad(false);
	}, []);
	return isLoad ? null : (
		<div className="profile-wrapper">
			<div className="profile-title">
				<img className="profile-logo" src={profile.logo} alt={profile.shortName} />
				<div>
					<div className="profile-name">{profile.shortName}</div>
					<div className="profile-symbol">{profile.symbol}</div>
				</div>
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
