import React, { useState } from 'react';
import Company from '../Company';
import dummy from 'assets/dummy.js';

const getCompanyProfile = () => {
	return dummy.AppleProfile;
};

const getCompanyQuote = () => {
	return dummy.AppleQuote;
};

const CompanyContainer = () => {
	const [profile, setProfile] = useState(getCompanyProfile());
	const [quote, setQuote] = useState(getCompanyQuote());

	return <Company profile={profile} quote={quote} />;
};

export default CompanyContainer;
