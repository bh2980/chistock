import React, { useEffect, useState } from 'react';
import News from '../components/News';

const NewsContainer = ({ companyInfo }) => {
	const [news, setNews] = useState();
	const [isLoad, setIsLoad] = useState(true);
	const [page, setPage] = useState(0);

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

	return isLoad ? null : <News news={news} />;
};

export default NewsContainer;
