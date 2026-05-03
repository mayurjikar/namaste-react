import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResList.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Search Component", () => {
  it("Should render body component with search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>,
      ),
    );

    const cardBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "Pizza" } });
    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(2);
  });

  it("Should filter top rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>,
      ),
    );

    const cardBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(12);

  });

  it("should render Username",async() => {
 await act(async() =>
 render(
 <BrowserRouter>
 <Body/>
 </BrowserRouter>
 ))
 const userInput = screen.getByTestId("userInput")
 expect(userInput.value).toBe("Mayur Jikar")
 })

});
