import React, { useState } from 'react';
import CompanyPresenter from './Company';
import { companyProfile, companyQuote } from './dummyData';

const getCompanyProfile = () => {
	return companyProfile[0];
};

const getCompanyQuote = () => {
	return companyQuote[0];
};

const Company = () => {
	const [profile, setProfile] = useState(getCompanyProfile());
	const [quote, setQuote] = useState(getCompanyQuote());

	return <CompanyPresenter profile={profile} quote={quote} />;
};

export default Company;
