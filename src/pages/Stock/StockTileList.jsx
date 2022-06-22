import React from 'react';
import StockItem from './StockItem';
import './css/StockTileList.scss';

const StockTileList = ({ stockList, onClick }) => {
	return (
		<div className="tile-list">
			{stockList.map((stock, index) => (
				<button key={index} className="shadow-box" onClick={e => onClick(e, index)}>
					<StockItem companyInfo={stock.data ? stock.data : stock} />
				</button>
			))}
		</div>
	);
};

export default StockTileList;
