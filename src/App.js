import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./sass/index.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ContentData from "./_data.json";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

class App extends Component {
  state = {
    isLoggedIn: false,
    currentUser: null,
    appData: null
  };
  fetchData = () => {
    this.setState({ appData: ContentData });
  };
  componentDidMount = () => {
    this.fetchData();
  };
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Suspense fallback={loading()}>
            <Route
              path="/"
              name="Home"
              component={({ history, match }) => (
                <DefaultLayout appData={this.state.appData} {...this.props} />
              )}
            />
          </React.Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
