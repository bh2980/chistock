import React from 'react';
import '../css/News.scss';

const News = ({ news }) => {
	return (
		<>
			<div className="card-title">News</div>
			<div className="profile-news-list">
				{news.map(anews => (
					<a key={anews.id} href={anews.url}>
						<button className="profile-news-item">
							<div>
								<span className="profile-news-title">{anews.headline}</span>
								<div className="profile-news-date">
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
