import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterUser from "./pages/Register/User";
import RegisterContent from "./pages/Register/Content";
import Profile from "./pages/Profile";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/register/user" component={RegisterUser} />
      <Route path="/register/content" component={RegisterContent} />
      <Route path="/profile" component={Profile} />
    </Router>
  );
}
