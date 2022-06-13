import React, { useState, useEffect } from 'react';
import Profile from '../components/Profile';

const ProfileContainer = ({ companyInfo }) => {
	const [isLoad, setIsLoad] = useState(true);
	const [profile, setProfile] = useState();

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
	return isLoad ? null : <Profile profile={profile} />;
};

export default ProfileContainer;
