import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DefaultFooter from "./DefaultFooter";
import DefaultHeader from "./DefaultHeader";
import routes from "../../_routes";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      appData: this.props.appData
    };
  }
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <React.Fragment>
        <DefaultHeader appData={this.state.appData} />
        <Suspense fallback={this.loading()}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component appData={this.state.appData} {...props} />
                  )}
                />
              ) : null;
            })}
            <Redirect appData={this.state.appData} from="/" to="/" />
          </Switch>
        </Suspense>
        <DefaultFooter appData={this.state.appData} />
      </React.Fragment>
    );
  }
}

export default DefaultLayout;
