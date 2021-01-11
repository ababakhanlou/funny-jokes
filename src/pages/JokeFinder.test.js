import React from "react";
import { shallow } from "enzyme";
import { localStorageMock } from "../testHelpers/mockLocalStorage";

describe("JokeFinder", () => {
  const mockGetJoke = jest.fn(() => "Joke!");
  let wrapper;

  Object.defineProperty(window, "localStorage", { value: localStorageMock });

  jest.mock("../components", () => ({
    Button: () => <button>Button</button>,
    Card: () => <div>Card</div>,
  }));

  jest.mock("../api/joke", () => ({
    __esModule: true,
    default: mockGetJoke,
  }));

  const JokeFinder = require("./JokeFinder").default;

  wrapper = shallow(<JokeFinder />);

  it("should render correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should call getNewJoke on mount", () => {
    expect(mockGetJoke).toHaveBeenCalled();
  });

  it("should save the joke when the like button is pressed if the joke is not saved", () => {
    const saveJoke = wrapper.find("Button").first().prop("action");
    saveJoke();
    expect(localStorageMock.getItem("jokes")).toBe("Joke!<#>");
    // when clicked a second time, it should not save again
    saveJoke();
    expect(localStorageMock.getItem("jokes")).toBe("Joke!<#>");
  });

  it("should get a new joke when button is pressed", () => {
    const getNewJoke = wrapper.find("Button").at(1).prop("action");
    getNewJoke();
    expect(mockGetJoke).toHaveBeenCalled();
  });
});
