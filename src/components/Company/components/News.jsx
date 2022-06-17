import React from 'react';
import '../css/News.scss';

const News = ({ news }) => {
	return (
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
