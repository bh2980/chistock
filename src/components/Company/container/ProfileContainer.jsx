import React from 'react';
import Profile from '../components/Profile';

const ProfileContainer = ({ companyInfo }) => {
	const { data } = companyInfo;
	const { website } = data;

	const newProfile = { ...data, website: website.slice(8) };
	return <Profile profile={newProfile} />;
};

export default ProfileContainer;
