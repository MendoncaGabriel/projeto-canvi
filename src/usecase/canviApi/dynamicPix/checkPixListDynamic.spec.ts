import axiosClient from "@/__mocks__/axiosClient";
import {
  mockCheckPixListDynamicRequest,
  mockCheckPixListDynamicResponse,
} from "@/test/utils/mockCanvi";
import { CheckPixListDynamicUseCase } from "./checkPixListDynamicUseCase";

jest.mock("@/lib/axiosClient");

describe("check pix list dynamic usecase", () => {
  let sut: CheckPixListDynamicUseCase;

  beforeEach(() => {
    sut = new CheckPixListDynamicUseCase(axiosClient);
  });

  it("should be able to check pix list", async () => {
    axiosClient.post.mockResolvedValue({
      data: mockCheckPixListDynamicResponse,
    });

    const response = await sut.execute(mockCheckPixListDynamicRequest);

    expect(response).toEqual(mockCheckPixListDynamicResponse);
  });
});
