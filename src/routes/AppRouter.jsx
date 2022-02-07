import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeContainer from 'components/Home/containers/HomeContainer';
import SearchList from 'components/SearchList/SearchList';
import Company from 'components/Company/CompanyContainer';
import HeaderContainer from 'components/Header/containers/HeaderContainer';

const AppRouter = () => {
	return (
		<Router>
			<HeaderContainer component={HeaderContainer} />
			<Switch>
				<Route path="/" exact component={HomeContainer} />
				<Route path="/search-list" component={SearchList} />
				<Route path="/detail" component={Company} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
