import React from "react";
import { shallow } from "enzyme";
import { localStorageMock } from "../testHelpers/mockLocalStorage";

describe("SavedJokes", () => {
  let wrapper;
  const mockReload = jest.fn();

  Object.defineProperty(window, "localStorage", { value: localStorageMock });
  Object.defineProperty(window, "location", { value: { reload: mockReload } });

  jest.mock("../components", () => ({
    Card: () => <div>Card</div>,
  }));

  const SavedJokes = require("./SavedJokes").default;

  wrapper = shallow(<SavedJokes />);

  it("should render correctly with no jokes", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should render correctly with list of jokes", () => {
    localStorageMock.setItem("jokes", "A Joke 1<#>A Joke 2<#>");
    wrapper = shallow(<SavedJokes />);

    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should delete a joke on delete click", () => {
    const deleteJoke = wrapper.find("Card").at(1).prop("action");
    deleteJoke();
    expect(localStorageMock.getItem("jokes")).toBe("A Joke 1");
  });
});
