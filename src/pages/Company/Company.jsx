import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './styles/Company.scss';
import RecommendList from '../../components/Company/RecommendList';
import DashBoard from '../../components/Company/DashBoard.jsx';
import CompanyChart from 'components/Company/CompanyChart';

const Company = () => {
	const { ticker } = useParams();

	//useEffect를 이용해서 ticker 변경 시 reload
	return (
		<div className="container">
			<RecommendList ticker={ticker} />
			<CompanyChart ticker={ticker} />
			<div className="vertical-line" />
			<DashBoard ticker={ticker} />
		</div>
	);
};

export default Company;
