import images from 'assets/images';
import React from 'react';
import StockItem from './StockItem';
import StockChartContainer from './container/StockChartContainer';
import './css/StockView.scss';

const StockView = ({ companyInfo }) => {
	return (
		<div className="stock-view-box">
			<div className="recommend-list">
				<button>
					<StockItem companyInfo={companyInfo} />
				</button>
				<button>
					<StockItem companyInfo={companyInfo} />
				</button>
				<button>
					<StockItem companyInfo={companyInfo} />
				</button>
				<button>
					<StockItem companyInfo={companyInfo} />
				</button>
				<button>
					<StockItem companyInfo={companyInfo} />
				</button>
			</div>
			<div className="stock-chart">
				<StockItem companyInfo={companyInfo} />
				<StockChartContainer />
			</div>
		</div>
	);
};

export default StockView;
