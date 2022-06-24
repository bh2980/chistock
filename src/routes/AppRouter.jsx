import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import SearchList from 'pages/SearchList/SearchList';
import Company from 'pages/Company/Company';
import Header from 'components/Header/Header';

const AppRouter = () => {
	return (
		<Router>
			<Header component={Header} />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/detail/:ticker" component={Company} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
