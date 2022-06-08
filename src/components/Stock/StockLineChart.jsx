import images from 'assets/images';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './css/StockDetailChart.scss';

const StockLineChart = ({ series, options, updatetime, setIsLineChart, canCandle }) => {
	return (
		<div className="chart-container shadow-box">
			<div className="period-selector">
				<div>
					<ul>
						<li>
							<input type="radio" id="oneday" name="chart-date" value="1day" defaultChecked />
							<label htmlFor="oneday">1D</label>
						</li>
						<li>
							<input type="radio" id="fiveday" name="chart-date" value="5day" />
							<label htmlFor="fiveday">5D</label>
						</li>
						<li>
							<input id="onemonth" type="radio" name="chart-date" value="1month" />
							<label htmlFor="onemonth">1M</label>
						</li>
						<li>
							<input id="oneyear" type="radio" name="chart-date" value="1year" />
							<label htmlFor="oneyear">1Y</label>
						</li>
						{canCandle ? (
							<>
								<li>|</li>
								<li>
									<button onClick={() => setIsLineChart(false)}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.4 306.69">
											<g id="레이어_2" data-name="레이어 2">
												<g id="레이어_1-2" data-name="레이어 1">
													<path
														d="M67.8,214.7H16.1c-8.8,0-16.1-7.2-16.1-16.1V40c0-8.8,7.2-16.1,16.1-16.1h51.7c8.8,0,16.1,7.2,16.1,16.1v158.6
	C83.9,207.5,76.6,214.7,67.8,214.7z"
													/>
													<path
														d="M176.1,287.1h-51.7c-8.8,0-16.1-7.2-16.1-16.1v-98.7c0-8.8,7.2-16.1,16.1-16.1h51.7c8.8,0,16.1,7.2,16.1,16.1v98.7
	C192.1,279.9,184.9,287.1,176.1,287.1z"
													/>
													<path
														d="M284.3,223h-51.7c-8.8,0-16.1-7.2-16.1-16.1V97.6c0-8.8,7.2-16.1,16.1-16.1h51.7c8.8,0,16.1,7.2,16.1,16.1v109.3
	C300.4,215.7,293.2,223,284.3,223z"
													/>
													<path
														d="M49,234.4H34.8c-3.2,0-5.9-2.6-5.9-5.9V9.2c0-3.2,2.6-5.9,5.9-5.9H49c3.2,0,5.9,2.6,5.9,5.9v219.4
	C54.9,231.8,52.3,234.4,49,234.4z"
													/>
													<path
														d="M157.3,306.7h-14.2c-3.2,0-5.9-2.6-5.9-5.9V142.6c0-3.2,2.6-5.9,5.9-5.9h14.2c3.2,0,5.9,2.6,5.9,5.9v158.2
	C163.2,304.1,160.5,306.7,157.3,306.7z"
													/>
													<path
														d="M265.6,245.3h-14.2c-3.2,0-5.9-2.6-5.9-5.9V66.2c0-3.2,2.6-5.9,5.9-5.9h14.2c3.2,0,5.9,2.6,5.9,5.9v173.3
	C271.4,242.6,268.8,245.3,265.6,245.3z"
													/>
												</g>
											</g>
										</svg>
									</button>
								</li>
							</>
						) : null}
					</ul>
				</div>
				<div className="update-time">
					<button>
						<img className="update-icon" src={images.sync} />
						<span> {updatetime} 업데이트</span>
					</button>
				</div>
			</div>
			<div className="chart">
				<ReactApexChart options={options} series={series} type="line" height={'100%'} />
			</div>
		</div>
	);
};

export default StockLineChart;
