import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeContainer from 'components/Home/Home';
import SearchList from 'components/SearchList/SearchList';
import CompanyContainer from 'components/Company/Company';
import HeaderContainer from 'components/Header/containers/HeaderContainer';

const AppRouter = () => {
	return (
		<Router>
			<HeaderContainer component={HeaderContainer} />
			<Switch>
				<Route path="/" exact component={HomeContainer} />
				<Route path="/detail/:ticker" component={CompanyContainer} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
