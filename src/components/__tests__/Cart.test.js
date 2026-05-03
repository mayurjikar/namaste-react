import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantsMenu from "../RestaurantsMenu";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Cart Component", () => {
  it("Should load resturant menu component", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantsMenu />
          </Provider>
        </BrowserRouter>,
      );
    });

    const accordianHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordianHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(10);

    const addBtn = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
  });
});
