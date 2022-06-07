import images from 'assets/images';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './css/StockCandleChart.scss';

const StockLineChart = ({ series, options, updatetime }) => {
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
						{/* <li>
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.4 306.69">
									<g id="레이어_2" data-name="레이어 2">
										<g id="레이어_1-2" data-name="레이어 1">
											<path d="M102.29,178.85c-4.37,0-8.22.06-12.07,0-4.58-.08-6.82-2.29-7.14-6.87,0-.25,0-.5,0-.75q0-65.84,0-131.68c0-5.28,2.37-7.48,7.6-7.53,3.71,0,7.43,0,11.59,0V16.11c0-3,0-6,0-9,.09-4.27,2.83-7.22,6.51-7.13S115,2.93,115,7c.07,7,0,14,0,21,0,1.21.1,2.43.17,4,3.81,0,7.39,0,11,0,5.89,0,8.06,2.2,8.09,8.2,0,9.23,0,18.46,0,27.68q0,50.88,0,101.75c0,7.41-1.85,9.22-9.33,9.23H115V183c0,8.85,0,17.71,0,26.56,0,4.84-2.33,7.56-6.32,7.59s-6.4-2.72-6.41-7.5C102.26,199.54,102.29,189.45,102.29,178.85Z" />
											<path d="M268.47,217.16c-4.25,0-8.09.06-11.92,0-5-.09-7.33-2.38-7.33-7.42q-.06-56.29,0-112.6c0-5.28,2.3-7.52,7.53-7.6,3.72-.06,7.44,0,11.73,0v-9.1c0-5.24,0-10.48,0-15.71.05-4.38,2.64-7.22,6.39-7.18s6.29,2.93,6.33,7.31c.06,6.86,0,13.72,0,20.58v4.1c3.81,0,7.26,0,10.72,0,6.45,0,8.43,2,8.44,8.56q0,23,0,46,0,32,0,64c0,7.26-1.83,9.09-9,9.11H281.23v9.92c0,7,0,14,0,20.94,0,4.68-2.6,7.53-6.52,7.46s-6.19-2.83-6.21-7.34c0-8.85,0-17.7,0-26.56Z" />
											<path d="M185.39,166.1c0-11-.06-21.34,0-31.69,0-3.91,2.66-6.5,6.22-6.55s6.21,2.52,6.47,6.35c.09,1.37,0,2.75,0,4.12,0,9.09,0,18.17,0,27.77,3.92,0,7.61,0,11.3,0,5.46.05,7.89,2.28,7.9,7.67q.07,43.41,0,86.82c0,5.39-2.4,7.68-7.82,7.79-3.61.06-7.22,0-11.37,0v3.79q0,12.92,0,25.82c0,5.59-2.38,8.76-6.48,8.68s-6.26-3.13-6.27-8.5c0-9.71,0-19.43,0-29.79-3.76,0-7.31,0-10.85,0-6.13-.06-8.39-2.27-8.4-8.36q0-42.84,0-85.69c0-6.07,2.27-8.21,8.49-8.23Z" />
											<path d="M19.19,268.39c-4.12,0-7.83.06-11.54,0-5.23-.12-7.57-2.37-7.6-7.59q-.11-24.31,0-48.62c0-5.42,2.4-7.67,7.82-7.76,3.36-.06,6.73,0,10.1-.07a7.17,7.17,0,0,0,1.22-.31V191.59c0-5.86,0-11.72,0-17.58,0-4.91,2.57-8,6.51-7.88s6.22,3,6.23,7.74c0,10,0,19.92,0,30.52,3.75,0,7.3,0,10.85,0,6.11.05,8.41,2.28,8.42,8.33q0,23.76,0,47.5c0,5.84-2.32,8.08-8.22,8.16-3.24.05-6.48,0-9.72.08a8.88,8.88,0,0,0-1.33.34v3.76c0,8.85,0,17.7,0,26.55,0,4.63-2.62,7.63-6.42,7.58s-6.3-3.07-6.32-7.74c0-8.85,0-17.7,0-26.55Z" />
										</g>
									</g>
								</svg>
							</button>
						</li> */}
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
