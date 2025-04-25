import { CanviDynamicPix, DynamicPix } from "./canvi";
import axios, { AxiosInstance } from "axios";

jest.mock("axios");

describe("canvi", () => {
  let mockedAxiosCreate = axios.create as jest.Mock;
  let mockedAxiosInstance: jest.Mocked<AxiosInstance>;

  beforeEach(() => {
    mockedAxiosInstance = {
      post: jest.fn(),
      defaults: { headers: { common: {} } },
    } as unknown as jest.Mocked<AxiosInstance>;

    mockedAxiosCreate.mockReturnValue(mockedAxiosInstance);
  });

  it("deve construir a instância de DynamicPix e definir o token corretamente", async () => {
    const fakeToken = "token-fake";

    mockedAxiosInstance.post.mockResolvedValueOnce({
      data: { token: fakeToken },
    });

    const dynamicPix = await CanviDynamicPix();
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: expect.any(String),
      headers: { "Content-Type": "application/json" },
    });
    expect(mockedAxiosInstance.post).toHaveBeenCalledWith("/token", {
      client_id: expect.any(String),
      private_key: expect.any(String),
    });
    expect(mockedAxiosInstance.defaults.headers.common["Authorization"]).toBe(
      `Bearer ${fakeToken}`
    );
    expect(dynamicPix).toBeInstanceOf(DynamicPix);
  });
});
