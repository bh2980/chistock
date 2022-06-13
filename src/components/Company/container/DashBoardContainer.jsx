import React, { useEffect, useState } from 'react';
import DashBoard from '../components/DashBoard.jsx';

const DashBoardContainer = ({ companyInfo, dashBoardInfo }) => {
	return <DashBoard companyInfo={companyInfo} dashBoardInfo={dashBoardInfo} />;
};

export default DashBoardContainer;
