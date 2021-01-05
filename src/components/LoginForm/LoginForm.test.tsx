import React from "react";
import { mount } from "enzyme";

import { LoginForm } from "./LoginForm";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { act } from "react-dom/test-utils";

import _fetchMock from "isomorphic-fetch";
const fetchMock = _fetchMock;

describe("LoginForm Testing Suit", () => {
  const initialState = {
    globalReducer: {
      user_id: "",
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it("tests the login of the form", async () => {
    const wrapper = mount(
      <Provider store={store}>
        <LoginForm setShowPasswordForm={jest.fn} />
      </Provider>
    );
    const emailField = wrapper.find('input[name="email"]');
    const passwordField = wrapper.find('input[name="password"]');
    const loginButton = wrapper.find('button[type="submit"]');
    await act(async () => {
      emailField.simulate("change", {
        target: { value: "test@example.com", name: "email" },
      });
      passwordField.simulate("change", {
        target: { value: "password1", name: "password" },
      });
      loginButton.simulate("click");
    });
    fetchMock.mock("/user/login/", {
      status: 200,
      body: {
        status: "logged",
        user: "test@example.com",
      },
    });
    expect(loginButton.getDOMNode()).toBeVisible();
  });
});
