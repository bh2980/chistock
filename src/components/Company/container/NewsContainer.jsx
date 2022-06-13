import React from 'react';
import News from '../components/News';

const NewsContainer = ({ companyInfo }) => {
	const { data } = companyInfo;
	const { news } = data;

	const newNews = news.map(anews => {
		const { datetime } = anews;
		const date = new Date(datetime);
		const newDateTime =
			date.getFullYear() +
			'/' +
			(date.getMonth() + 1).toString().padStart(2, '0') +
			'/' +
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

	return <News news={newNews.slice(0, 5)} />;
};

export default NewsContainer;
