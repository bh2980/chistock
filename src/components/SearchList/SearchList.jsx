import React from 'react';
import './styles/SearchListStyle.scss';

const SearchList = () => {
	const companies = [
		{
			name: 'Apple Inc. (APPL)',
			stockPrice: '172.19',
			revisedPrice: '-3.34',
			percent: '-1.41',
		},
		{
			name: 'Maui Land & Pinea... (MLP)',
			stockPrice: '10.08',
			revisedPrice: '0.08',
			percent: '+0.79',
		},
		{
			name: 'Apple Hospitality... (APLE)',
			stockPrice: '172.19',
			revisedPrice: '0.12',
			percent: '+0.72',
		},
		{
			name: 'GCP Applied Tech... (GCP)',
			stockPrice: '31.87',
			revisedPrice: '-0.08',
			percent: '-0.25',
		},
	];

	const searchList = companies.map((company, index) => (
		<div className="search-item shadow-box">
			<div className="number shadow-box">
				<h1>{index + 1}</h1>
			</div>
			<div className="company-name">{company.name}</div>
			<div className="stock-numbers">
				<div className="stock-price">$ {company.stockPrice}</div>
				<div className="search-price">
					<div className="revised-price">▼ {company.revisedPrice}</div>
					<div className="percent">{company.percent}%</div>
				</div>
			</div>
		</div>
	));

	return (
		<>
			<div className="wrapper">
				<div className="contents">
					<div className="search-result shadow-box">
						<div className="search-num-text">
							<span>'APPLE' 검색 결과 </span>
							<span className="search-num">{companies.length}</span>
							<span> 건</span>
						</div>
					</div>
					<div>{searchList}</div>
				</div>
			</div>
		</>
	);
};

export default SearchList;
