import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/index.scss';
import images from 'assets/images.js';
import dummy from 'assets/dummy';

const Header = () => {
	const [itemList, setItemList] = useState([]);

	const getHeaderList = () => {
		return dummy.MostActiveStock;
	};

	useEffect(() => {
		setItemList(getHeaderList());
	});

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
					{itemList.map(item => (
						<>
							<span className="banner-ticker">{item.symbol}</span>
							<span className={item.change > 0 ? 'red-text' : 'blue-text'}>
								{item.change > 0 ? '+' : null}
								{item.change.toFixed(2)}
							</span>
							<span className={item.change > 0 ? 'red-text' : 'blue-text'}>
								{item.change > 0 ? '+' : null}
								{item.changesPercentage.toFixed(2)}%
							</span>
						</>
					))}
				</div>
				<div className="banner2">
					{itemList.map(item => (
						<>
							<span className="banner-ticker">{item.symbol}</span>
							<span className={item.change > 0 ? 'red-text' : 'blue-text'}>
								{item.change > 0 ? '+' : null}
								{item.change.toFixed(2)}
							</span>
							<span className={item.change > 0 ? 'red-text' : 'blue-text'}>
								{item.change > 0 ? '+' : null}
								{item.changesPercentage.toFixed(2)}%
							</span>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
