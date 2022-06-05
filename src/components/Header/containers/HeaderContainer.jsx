import React from 'react';
import Header from '../Header';
import dummy from 'assets/dummy';

const HeaderContainer = () => {
	return <Header itemList={dummy.MostActiveStock} />;
};

export default HeaderContainer;
