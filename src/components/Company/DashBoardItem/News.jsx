import { getCompanyNews } from 'lib/fetchData';
import React, { useEffect, useState } from 'react';
import './styles/News.scss';

const News = ({ ticker }) => {
	const [news, setNews] = useState();
	const [isLoad, setIsLoad] = useState(true);

	const getNews = async () => {
		//TODO 이장훈 : 임시 날짜 변경
		const { data } = await getCompanyNews('20220202', '20220202', ticker);

		const newNews = data.map(anews => {
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
		setIsLoad(false);
	};

	useEffect(() => {
		getNews();
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
