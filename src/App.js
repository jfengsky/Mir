import { inject, observer } from "mobx-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

import Home from "./pages/home";
import Admin from "./pages/admin";
import LivingList from "./pages/admin/LivingList";

const getComponent = item => {
  const { cmp } = item
  switch (cmp) {
    case 'admin':
      return Admin;
    case 'livinglist':
      return LivingList;
    default:
      return Home;
  }
}

const App = (props) => {
  const {
    store: {
      GlobalStore: { routerlist },
    },
  } = props;
  return (
    <Router>
      <Switch>
        {
          routerlist.map((item, index) => {
            const { path, exact } = item
            return (
              <Route
                key={index}
                path={path}
                exact={exact}
                component={getComponent(item)}
              />
            )
          })
        }
      </Switch>
    </Router>
  );
};

export default inject("store")(observer(App));
