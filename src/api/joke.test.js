describe("getJoke", () => {
  let shouldFailAtFetch = false;
  let shouldFailAtJson = false;
  global.fetch = jest.fn(() =>
    shouldFailAtFetch
      ? Promise.reject(new Error("bad joke in fetch"))
      : shouldFailAtJson
      ? Promise.resolve({
          json: () => Promise.reject({ joke: "bad joke in json" }),
        })
      : Promise.resolve({
          json: () => Promise.resolve({ joke: "good joke" }),
        })
  );

  beforeEach(() => {
    shouldFailAtFetch = false;
    shouldFailAtJson = false;
  });
  it("should return empty string if it fails at fetch", async () => {
    shouldFailAtFetch = true;
    const getJoke = require("./joke").default;
    const result = await getJoke();
    expect(result).toBe("");
  });
  it("should return empty string if it fails at json", async () => {
    shouldFailAtJson = true;
    const getJoke = require("./joke").default;
    const result = await getJoke();
    expect(result).toBe("");
  });
  it("should return a joke", async () => {
    const getJoke = require("./joke").default;
    const result = await getJoke();
    expect(result).toBe("good joke");
  });
});
