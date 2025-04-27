import axiosClient from "@/__mocks__/axiosClient";
import {
  mockGeneratePixStaticRequest,
  mockGeneratePixStaticResponse,
} from "@/test/utils/mockCanvi";
import { GeneratePixStaticUseCase } from "./generatePixStaticUseCase";

jest.mock("@/lib/axiosClient");

describe("generate pix static useCase", () => {
  let sut: GeneratePixStaticUseCase;

  beforeEach(() => {
    sut = new GeneratePixStaticUseCase(axiosClient);
  });

  it("should be able generate pix static", async () => {
    axiosClient.post.mockResolvedValueOnce({
      data: mockGeneratePixStaticResponse,
    });

    const result = await sut.execute(mockGeneratePixStaticRequest);

    expect(result).toEqual(mockGeneratePixStaticResponse);
    expect(axiosClient.post).toHaveBeenCalledWith(
      "/pix",
      mockGeneratePixStaticRequest
    );
  });
});
