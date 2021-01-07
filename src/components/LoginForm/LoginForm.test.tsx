import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

import { LoginForm } from "./LoginForm";

import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("LoginForm Testing Suit", () => {
  it("checks submitting with values", async () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <LoginForm setShowPasswordForm={jest.fn} />
      </Provider>
    );
    const emailField = await screen.findByPlaceholderText("Email");
    const passwordField = await screen.findByPlaceholderText("Password");
    const loginButton = getByText("Log In");
    const form = getByTestId("loginForm");

    // adding function to the form
    const fetchUser = jest.fn();
    form.onsubmit = fetchUser;

    // filling up the form
    await waitFor(() => {
      fireEvent.change(emailField, {
        target: {
          value: "test@example.com",
        },
      });
    });

    await waitFor(() => {
      fireEvent.change(passwordField, {
        target: {
          value: "password1",
        },
      });
    });

    // pressing login
    await waitFor(() => {
      fireEvent.click(loginButton);
    });

    // assertation
    expect(fetchUser).toHaveBeenCalled();
  });
});
