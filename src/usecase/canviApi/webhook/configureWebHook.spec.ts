import axiosClient from "@/__mocks__/axiosClient";
import {
  mockConfigureWebHookRequest,
  mockConfigureWebHookResponse,
} from "@/test/utils/mockCanvi";
import { ConfigureWebHookUseCase } from "./configureWebHookUseCase";

jest.mock("@/lib/axiosClient");

describe("consigure webhook", () => {
  let sut: ConfigureWebHookUseCase;

  beforeEach(() => {
    sut = new ConfigureWebHookUseCase(axiosClient);
  });

  it("should be able to configure webhook", async () => {
    axiosClient.post.mockResolvedValueOnce({
      data: mockConfigureWebHookResponse
    });

    const response = await sut.execute(mockConfigureWebHookRequest);
    expect(response).toEqual(mockConfigureWebHookResponse);
  });
});
