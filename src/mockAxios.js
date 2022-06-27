import dummy from 'assets/dummy';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockAxios = axios.create();
const mock = new MockAdapter(mockAxios, { delayResponse: 1500 });

mock.onGet('/api/yh/market/v2/get-summary').reply(config => {
	const { region } = config.params;
	return [200, { marketSummaryAndSparkResponse: { result: dummy.MarketSummary, error: null } }];
});

mock.onGet('api/yh/market/get-trending-tickers').reply(config => {
	const { region } = config.params;
	return [200, { finance: { result: dummy.TrendingStock, error: null } }];
});

mock.onGet('api/yh/stock/v2/get-summary').reply(config => {
	const { symbol, region } = config.params;
	return [200, dummy.AppleSummary];
});

mock.onGet('api/yh/stock/v2/get-chart').reply(config => {
	const { interval, symbol, range, region } = config.params;
	return [200, { chart: { result: dummy.AppleChart } }];
});

mock.onGet('api/yh/stock/v2/get-recommendations').reply(config => {
	const { symbol } = config.params;
	return [200, { finance: { result: dummy.AppleRecommend } }];
});

mock.onPost('api/yh/news/v2/list').reply(config => {
	const { region, snippetCount } = JSON.parse(config.data);
	return [200, { main: dummy.MarketNews }];
});

mock.onGet('api/fh/v1/stock/profile2').reply(config => {
	const { symbol, token } = config.params;
	if (!token) return [401, ''];
	return [200, dummy.AppleProfile];
});

mock.onGet('api/fh/v1/company-news').reply(config => {
	const { from, to, token } = config.params;
	if (!token) return [401, ''];
	return [200, dummy.AppleNews];
});

export default mockAxios;
