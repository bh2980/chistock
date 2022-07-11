import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/index.scss';
import images from 'assets/images.js';
import { getTrendingTickers } from 'lib/fetchData';

const Header = () => {
	//CHECK : 화면 표시를 위해 loading 시켜놓음. 리팩토링 시 제거
	const [loading, setLoading] = useState(true);
	const [headerList, setHeaderList] = useState([]);

	const getHeaderList = async () => {
		const { data } = await getTrendingTickers();
		const newHeaderList = data.map(item => {
			const { symbol, regularMarketChange, regularMarketChangePercent } = item;
			return {
				symbol,
				regularMarketChange: Math.round(regularMarketChange * 100) / 100,
				regularMarketChangePercent: Math.round(regularMarketChangePercent * 100) / 100,
			};
		});

		setHeaderList(newHeaderList);
		//CHECK : 화면 표시를 위해 loading 시켜놓음. 리팩토링 시 제거
		setLoading(false);
	};

	useEffect(() => {
		getHeaderList();
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
				{loading ? null : (
					<>
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
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
