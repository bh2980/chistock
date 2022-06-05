import React from 'react';
import { Link } from 'react-router-dom';
import './css/index.scss';
import images from 'assets/images.js';

const Header = ({ itemList }) => {
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
						<input
							className="search-input"
							type="text"
							placeholder="종목명, 종목코드를 입력해 주세요"
						/>
					</form>
					<img src={images.search} alt="Search" className="search-icon" />
				</div>
			</div>
			<div className="header-bottom">
				<div className="banner-area">
					{itemList.map(item => (
						<>
							{item.symbol}
							<span className={item.change > 0 ? 'red-text' : 'blue-text'}>
								{item.change > 0 ? '+' : null}
								{item.change.toFixed(2)}
							</span>
							<span className={item.change > 0 ? 'red-text' : 'blue-text'}>
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
