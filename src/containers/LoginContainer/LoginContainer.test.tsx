import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from "../../redux/store";

import { LoginContainer } from "./LoginContainer";

describe("LoginContainer testing suit", () => {
  it("checks login with visitor", () => {
    const { getByText } = render(
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    );
    // pressing the login button
    const button = getByText("Show me around (demo version)");
    const loginAsVisitor = jest.fn();
    button.onclick = loginAsVisitor;
    fireEvent.click(button);

    // fire the function
    expect(loginAsVisitor).toHaveBeenCalled();
  });
});
