import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPanel from "./components/MainPanel.jsx";
import Welcome from "./components/Welcome.jsx";

class Rooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/Panel" exact component={MainPanel} />
        </switch>
      </BrowserRouter>
    );
  }
}

export default Rooter;
