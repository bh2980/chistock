import React from 'react';
import { Link } from 'react-router-dom';
import './css/index.css';

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
				{/* 검색 아이콘 넣어야 함! */}
			</div>
		</div>
	);
};

export default Header;
