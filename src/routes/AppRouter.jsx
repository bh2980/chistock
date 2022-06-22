import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeContainer from 'components/Home/Home';
import SearchList from 'components/SearchList/SearchList';
import CompanyContainer from 'components/Company/Company';
import Header from 'components/Header/Header';

const AppRouter = () => {
	return (
		<Router>
			<Header component={Header} />
			<Switch>
				<Route path="/" exact component={HomeContainer} />
				<Route path="/detail/:ticker" component={CompanyContainer} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
