import React, { useEffect, useState } from 'react';
import './css/News.scss';

const News = ({ companyInfo }) => {
	const [news, setNews] = useState();
	const [isLoad, setIsLoad] = useState(true);

	const getNews = () => {
		const { data } = companyInfo;
		const { news } = data;

		console.log(news);

		const newNews = news.map(anews => {
			const { datetime } = anews;
			const date = new Date(datetime);
			const newDateTime =
				date.getFullYear() +
				'-' +
				(date.getMonth() + 1).toString().padStart(2, '0') +
				'-' +
				date.getDay().toString().padStart(2, '0') +
				' ' +
				date.getHours().toString().padStart(2, '0') +
				':' +
				date.getMinutes().toString().padStart(2, '0') +
				':' +
				date.getSeconds().toString().padStart(2, '0');
			return {
				...anews,
				datetime: newDateTime,
				headline: anews.headline.length > 50 ? anews.headline.slice(0, 50) + '...' : anews.headline,
			};
		});

		setNews(newNews.slice(0, 4));
	};

	useEffect(() => {
		getNews();
		setIsLoad(false);
	}, []);

	return isLoad ? null : (
		<>
			<div className="card-title">News</div>
			<div className="dashboard-news-list">
				{news.map(anews => (
					<a key={anews.id} href={anews.url}>
						<button className="dashboard-news-item">
							<div>
								<span className="dashboard-news-title">{anews.headline}</span>
								<div className="dashboard-news-date">
									{anews.source} / {anews.datetime}
								</div>
							</div>
							{anews.image ? <img src={anews.image} alt={anews.headline} /> : null}
						</button>
					</a>
				))}
			</div>
		</>
	);
};

export default News;
