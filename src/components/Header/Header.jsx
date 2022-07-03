import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/index.scss';
import images from 'assets/images.js';
import dummy from 'assets/dummy';

const Header = () => {
	const [headerList, setHeaderList] = useState([]);

	const getHeaderList = () => {
		const response = dummy.TrendingStock[0].quotes;
		const newHeaderList = response.map(item => {
			const { symbol, regularMarketChange, regularMarketChangePercent } = item;
			return {
				symbol,
				regularMarketChange: Math.round(regularMarketChange * 100) / 100,
				regularMarketChangePercent: Math.round(regularMarketChangePercent * 100) / 100,
			};
		});

		return newHeaderList;
	};

	useEffect(() => {
		setHeaderList(getHeaderList());
	}, []);

	return (
		<div className="haeder-wrap">
			<div className="header-top">
				<div className="logo-image">
					<Link
						to={{
							pathname: '/',
						}}
					>
						<img className="logo" src={images.chistockIcon} alt="chistock" />
					</Link>
				</div>
				<div className="input-box">
					<form className="search">
						<input className="search-input shadow-box" type="text" placeholder="종목 검색" />
					</form>
					<img src={images.search} alt="Search" className="search-icon" />
				</div>
			</div>
			<div className="header-bottom">
				<div className="banner">
					{headerList.map(item => (
						<>
							<span className="banner-ticker">{item.symbol}</span>
							<span className={item.regularMarketChange > 0 ? 'red-text' : 'blue-text'}>
								{item.regularMarketChange > 0 ? '+' : null}
								{item.regularMarketChange}
							</span>
							<span className={item.regularMarketChange > 0 ? 'red-text' : 'blue-text'}>
								{item.regularMarketChange > 0 ? '+' : null}
								{item.regularMarketChangePercent}%
							</span>
						</>
					))}
				</div>
				<div className="banner2">
					{headerList.map(item => (
						<>
							<span className="banner-ticker">{item.symbol}</span>
							<span className={item.regularMarketChange > 0 ? 'red-text' : 'blue-text'}>
								{item.regularMarketChange > 0 ? '+' : null}
								{item.regularMarketChange}
							</span>
							<span className={item.regularMarketChange > 0 ? 'red-text' : 'blue-text'}>
								{item.regularMarketChange > 0 ? '+' : null}
								{item.regularMarketChangePercent}%
							</span>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
