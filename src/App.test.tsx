import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { addUser } from "./redux/slices/globalSlice";

import { Provider } from "react-redux";
import { store } from "./redux/store";

test("tests that screen changes after redux state update", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
  expect(screen.getByTestId("loginContainer")).toBeInTheDocument();
  store.dispatch(addUser({ user_id: "test@example.com" }));
  expect(screen.getByTestId("mainContentContainer")).toBeInTheDocument();
});
