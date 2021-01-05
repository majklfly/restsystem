import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

test("renders learn react link", () => {
  const initialState = {
    globalReducer: {
      user_id: "test@mail.com",
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
