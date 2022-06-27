import axios from '../mockAxios';

export const queryKeys = {
	marketSummary: ['marketSummary'],
	trendingTickers: ['trendingTickers'],
	summaryBySymbol: symbol => ['summary', symbol],
	chartByInfos: (interval, symbol, range) => ['chartByRange', interval, symbol, range],
	recommendation: symbol => ['recommendation', symbol],
	newsList: snippetCount => ['newsList', snippetCount],
	stockProfile: (symbol, token) => ['stockProfile', symbol, token],
	companyNews: (from, to, token) => ['companyNews', from, to, token],
};

export const getMarketSummary = () =>
	axios
		.get(`${process.env.REACT_APP_YH_API_BASE_URL}/market/v2/get-summary`, {
			params: { region: 'US' },
		})
		.then(response => {
			const marketSum = response.data.marketSummaryAndSparkResponse.result;
			const newMarketSum = marketSum.map(marketItem => {
				const { symbol, shortName, spark } = marketItem;
				const { timestamp, previousClose, close } = spark;
				const regularMarketPrice = close[close.length - 1];
				const regularMarketChange = regularMarketPrice - previousClose;
				const regularMarketChangePercent = regularMarketChange / previousClose;

				return {
					data: {
						symbol,
						shortName,
						regularMarketPrice,
						regularMarketChange,
						regularMarketChangePercent,
					},
					chart: { shortName, timestamp, close },
				};
			});
			return { ...response, data: newMarketSum };
		});

export const getTrendingTickers = () =>
	axios
		.get(`${process.env.REACT_APP_YH_API_BASE_URL}/market/get-trending-tickers`, {
			params: { region: 'US' },
		})
		.then(response => {
			return response.data.finance.result[0].quotes;
		});

export const getStockSummary = symbol =>
	axios.get(`${process.env.REACT_APP_YH_API_BASE_URL}/stock/v2/get-summary`, {
		params: { symbol, region: 'US' },
	});

export const getStockChart = (interval, symbol, range) =>
	axios
		.get(`${process.env.REACT_APP_YH_API_BASE_URL}/stock/v2/get-chart`, {
			params: { interval, symbol, range, region: 'US' },
		})
		.then(response => {
			return {
				...response,
				data: response.data.chart.result[0],
			};
		});

export const getRecommendations = symbol =>
	axios
		.get(`${process.env.REACT_APP_YH_API_BASE_URL}/stock/v2/get-recommendations`, {
			params: { symbol },
		})
		.then(response => {
			return {
				...response,
				data: response.data.finance.result[0].quotes.map(item => {
					const {
						regularMarketChange,
						regularMarketChangePercent,
						regularMarketPrice,
						symbol,
						shortName,
					} = item;
					return {
						data: {
							regularMarketChange,
							regularMarketChangePercent,
							regularMarketPrice,
							symbol,
							shortName,
						},
					};
				}),
			};
		});

export const postNewsList = snippetCount =>
	axios
		.post(`${process.env.REACT_APP_YH_API_BASE_URL}/news/v2/list`, {
			region: 'US',
			snippetCount,
		})
		.then(response => {
			return {
				...response,
				data: response.data.main.stream.map(anews => {
					const { content } = anews;
					const { pubDate, title } = content;
					return {
						...anews,
						content: {
							...content,
							pubDate: pubDate.replace('T', ' ').replace('Z', ''),
							title: title.length > 70 ? title.slice(0, 50) + '...' : title,
						},
					};
				}),
			};
		});

export const getStockProfile = (symbol, token) =>
	axios.get(`${process.env.REACT_APP_FH_API_BASE_URL}/v1/stock/profile2`, {
		params: { symbol, token },
	});

export const getCompanyNews = (from, to, token) =>
	axios.get(`${process.env.REACT_APP_FH_API_BASE_URL}/v1/company-news`, {
		params: { from, to, token },
	});
