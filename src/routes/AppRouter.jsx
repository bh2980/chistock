import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'components/Home/Home';
import SearchList from 'components/SearchList/SearchList';
import Company from 'components/Company/Company';
import HeaderContainer from 'components/Header/containers/HeaderContainer';

const AppRouter = () => {
  return (
    <Router>
      <HeaderContainer component={HeaderContainer} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search-list" component={SearchList} />
        <Route path="/detail" component={Company} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
