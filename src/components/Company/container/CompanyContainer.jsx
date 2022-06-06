import React, { useState } from 'react';
import Company from '../Company';
import dummy from 'assets/dummy.js';

const getCompanyInfo = () => {
	return dummy.AppleSummary;
};

const CompanyContainer = () => {
	const [companyInfo, setCompanyInfo] = useState(getCompanyInfo());

	return <Company companyInfo={companyInfo} />;
};

export default CompanyContainer;
