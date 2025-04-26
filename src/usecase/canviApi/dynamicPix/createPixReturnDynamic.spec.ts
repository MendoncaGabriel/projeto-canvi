import axiosClient from "@/__mocks__/axiosClient";
import { CreatePixReturnDynamicUseCase } from "./createPixReturnDynamicUseCase";
import {
  mockCreatePixReturnDynamicRequest,
  mockCreatePixReturnDynamicResponse,
} from "@/test/utils/mockCanvi";

jest.mock("@/lib/axiosClient");

describe("devolution pix usecase", () => {
  let sut: CreatePixReturnDynamicUseCase;

  beforeEach(() => {
    sut = new CreatePixReturnDynamicUseCase(axiosClient);
  });

  it("should be able to devolution pix", async () => {
    axiosClient.post.mockResolvedValueOnce({
      data: mockCreatePixReturnDynamicResponse
    });

    const result = await sut.execute(mockCreatePixReturnDynamicRequest);
    expect(result).toEqual(mockCreatePixReturnDynamicResponse);
  });
});
