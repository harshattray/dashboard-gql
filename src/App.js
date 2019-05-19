/**
 * @Author: harsha
 * @Date:   2019-05-13T22:46:53+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-17T04:02:58+05:30
 */

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ViewComponent from "./components/ViewComponent/ViewComponent";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <header className="Branch-header">
        <Container>
          <h1 className="Branch-title">Details Dashboard</h1>
        </Container>
      </header>{" "}
      <ViewComponent />
    </div>
  );
}

export default App;