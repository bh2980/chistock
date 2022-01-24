import React from 'react';
import { Link } from 'react-router-dom';
import './css/index.scss';
import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg';

const Header = () => {
	return (
		<div className="haeder-wrap">
			<div className="logo-image">
				<Link
					to={{
						pathname: '/',
					}}
				>
					stock
				</Link>
			</div>
			<div className="input-box shadow-box">
				<form className="search">
					<input
						className="search-input shadow-box"
						type="text"
						placeholder="종목명, 종목코드를 입력해 주세요"
					/>
				</form>
				<SearchIcon className="search-icon" />
			</div>
		</div>
	);
};

export default Header;
