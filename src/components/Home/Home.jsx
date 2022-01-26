import React, { useEffect, useState } from 'react';
import './style/index.scss';
import trending from 'assets/icons/trending_up.svg';
import fire from 'assets/icons/fire.svg';
import ReactApexChart from 'react-apexcharts';
import StockItem from './components/StockItem';

const Home = ({
	buttonOnClick,
	chartOption,
	isChartLoading,
	isListLoading,
	buttonSelected,
	NASDAQInfo,
	NASDAQHistory,
	itemList,
	getMoreItem,
}) => {
	const [target, setTarget] = useState(null);

	const onIntersect = async ([entry], observer) => {
		if (entry.isIntersecting && !isListLoading) {
			observer.unobserve(entry.target);
			await getMoreItem();
			observer.observe(entry.target);
		}
	};

	useEffect(() => {
		let observer;
		if (target) {
			observer = new IntersectionObserver(onIntersect, {
				threshold: 0.4,
			});
			observer.observe(target);
		}
		return () => observer && observer.disconnect();
	}, [target]);

	return (
		<div className="home">
			{isChartLoading ? (
				<span>Loading</span>
			) : (
				<>
					<div className="chart-container shadow-box">
						<div className="title">
							<div className="image-container shadow-box">
								<img src={trending} alt="trending icon" />
							</div>
							<div className="texts">
								<div className="title-area">
									<span className="title-text">나스닥 종합</span>
								</div>
								<div
									className={`price-area ${NASDAQInfo[0].changesPercentage > 0 ? 'inc' : 'desc'}`}
								>
									<span className="current-price">{NASDAQInfo[0].price}</span>
									<span className="price-delta">{`${NASDAQInfo[0].changesPercentage}%`}</span>
								</div>
							</div>
						</div>
						<div className="chart">
							<div className="buttons">
								<button
									className={`shadow-box ${buttonSelected === 0 && 'clicked'}`}
									onClick={() => buttonOnClick(0)}
								>
									1분
								</button>
								<button
									className={`shadow-box ${buttonSelected === 1 && 'clicked'}`}
									onClick={() => buttonOnClick(1)}
								>
									5분
								</button>
								<button
									className={`shadow-box ${buttonSelected === 2 && 'clicked'}`}
									onClick={() => buttonOnClick(2)}
								>
									15분
								</button>
								<button
									className={`shadow-box ${buttonSelected === 3 && 'clicked'}`}
									onClick={() => buttonOnClick(3)}
								>
									30분
								</button>
								<button
									className={`shadow-box ${buttonSelected === 4 && 'clicked'}`}
									onClick={() => buttonOnClick(4)}
								>
									4시간
								</button>
								<button
									className={`shadow-box ${buttonSelected === 5 && 'clicked'}`}
									onClick={() => buttonOnClick(5)}
								>
									하루
								</button>
							</div>
							<ReactApexChart
								type="candlestick"
								options={chartOption}
								series={[
									{
										data: NASDAQHistory.historical.map(item => {
											return {
												x: new Date(item.date),
												y: [item.open, item.high, item.low, item.close],
											};
										}),
									},
								]}
								height={500}
							/>
						</div>
					</div>
					<div className="line" />
					<div className="main-item">
						<div className="title shadow-box">
							<div className="image-container shadow-box">
								<img src={fire} alt="fire icon" />
							</div>
							<div className="title">
								<span className="title-text">주요 종목</span>
							</div>
						</div>
						<div className="stock-list shadow-box">
							{itemList.map(
								//NASDAQ100에서 itemList 으로 변경 필요
								(item, idx) => (
									<StockItem
										key={idx}
										idx={idx + 1}
										code={item.symbol}
										percentDelta={item.percentDelta}
										price={item.price}
									/>
								),
							)}
							<div ref={setTarget} className="loader">
								{isListLoading && <span>⏰Loading...</span>}
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Home;
