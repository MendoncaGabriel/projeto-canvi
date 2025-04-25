jest.mock("./src/lib/axiosClient", () => ({
  client: require("./src/__mocks__/axiosClient"),
}));
