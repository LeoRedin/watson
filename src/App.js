import React, { Fragment } from "react";

import Home from "./components/Home";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
}

export default App;
