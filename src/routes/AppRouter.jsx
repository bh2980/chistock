import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'components/Home/Home';
import SearchList from 'components/SearchList/SearchList';

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/search-list" component={SearchList} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
