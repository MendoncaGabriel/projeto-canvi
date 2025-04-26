import axiosClient from "@/__mocks__/axiosClient";
import {
  mockGeneratePixRequest,
  mockGeneratePixResponse,
} from "@/test/utils/mockCanvi";
import { GeneratePixUseCase } from "./generatePixStaticUseCase";

jest.mock("@/lib/axiosClient");

describe("generate pix useCase", () => {
  let sut: GeneratePixUseCase;

  beforeEach(() => {
    sut = new GeneratePixUseCase(axiosClient);
  });

  it("should be able generate pix", async () => {
    axiosClient.post.mockResolvedValueOnce({
      data: mockGeneratePixResponse,
    });

    const result = await sut.execute(mockGeneratePixRequest);

    expect(result).toEqual(mockGeneratePixResponse);
    expect(axiosClient.post).toHaveBeenCalledWith(
      "/pix",
      mockGeneratePixRequest
    );
  });
});
