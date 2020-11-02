import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

describe("App", () => {
  jest.mock("./components", () => ({ NavBar: () => () => <div>NavBar</div> }));
  jest.mock("./pages/JokeFinder", () => () => <div>JokeFinder</div>);
  jest.mock("./pages/SavedJokes", () => () => <div>SavedJokes</div>);

  it("render correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
