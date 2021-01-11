import getJoke from "./joke";

describe("getJoke", () => {
  let shouldFail = false;
  jest.spyOn(global, "fetch").mockImplementation(() =>
    !shouldFail
      ? Promise.resolve({
          json: () => Promise.resolve({ joke: "This is a joke" }),
        })
      : Promise.reject("")
  );

  beforeEach(() => {
    shouldFail = false;
  });

  it("should return a joke when all is ok", async () => {
    const result = await getJoke();
    expect(result).toBe("This is a joke");
  });

  it("should return empty string when no joke is returned", async () => {
    shouldFail = true;
    const result = await getJoke();
    expect(result).toBe("");
  });
});
