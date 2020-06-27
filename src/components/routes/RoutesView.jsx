import React from "react";
import { Switch, Route } from "react-router";
import {
  HomePageContainer,
  PortfolioPageContainer,
  ExtraPageContainer,
  MyPortfolioContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={MyPortfolioContainer} />
    </Switch>
  );
};

export default RoutesView;
