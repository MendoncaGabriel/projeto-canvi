import axiosClient from "@/__mocks__/axiosClient";
import {
  mockGeneratePixDynamicRequest,
  mockGeneratePixDynamicResponse,
} from "@/test/utils/mockCanvi";
import { GeneratePixDynamicUseCase } from "./generatePixDynamicUseCase";

jest.mock("@/lib/axiosClient");

describe("generate pix useCase", () => {
  let sut: GeneratePixDynamicUseCase;

  beforeEach(() => {
    sut = new GeneratePixDynamicUseCase(axiosClient);
  });

  it("should be able generate pix", async () => {
    axiosClient.post.mockResolvedValueOnce({
      data: mockGeneratePixDynamicResponse,
    });

    const result = await sut.execute(mockGeneratePixDynamicRequest);

    expect(result).toEqual(mockGeneratePixDynamicResponse);
    expect(axiosClient.post).toHaveBeenCalledWith(
      "/pix",
      mockGeneratePixDynamicRequest
    );
  });
});
