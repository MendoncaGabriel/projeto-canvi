import axiosClient from "@/__mocks__/axiosClient";
import { CheckPixListUseCase } from "./checkPixListUseCase";
import {
  mockCheckPixListRequest,
  mockCheckPixListResponse,
} from "@/test/utils/mockCanvi";

jest.mock("@/lib/axiosClient");

describe("check pix list usecase", () => {
  let sut: CheckPixListUseCase;

  beforeEach(() => {
    sut = new CheckPixListUseCase(axiosClient);
  });

  it("should be able to check pix list", async () => {
    axiosClient.post.mockResolvedValue({
      data: mockCheckPixListResponse,
    });

    const response = await sut.execute(mockCheckPixListRequest);

    expect(response).toEqual(mockCheckPixListResponse);
  });
});
