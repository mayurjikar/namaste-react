import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import { toBeInTheDocument } from "@testing-library/jest-dom";

describe("Header UI Component", () => {
  test("Should render Header component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
  });

  test("Should render Header component with a cart item 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const cartItems = screen.getByText("Cart - (0 items)");

    expect(cartItems).toBeInTheDocument();
  });

   test("Should render Header component with a cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
  });

   it("Should change login button to logout button onClick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logOutButton = screen.getByRole("button", { name: "Logout" });

    expect(logOutButton).toBeInTheDocument();
  });

});
