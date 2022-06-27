import './App.scss';
import AppRouter from 'routes/AppRouter';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			suspense: true,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<AppRouter />
			</div>
		</QueryClientProvider>
	);
}

export default App;
