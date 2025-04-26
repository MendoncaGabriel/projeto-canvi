import axiosClient from "@/__mocks__/axiosClient";
import { mockConsultDynamicPixListRequest, mockConsultDynamicPixListResponse } from "@/test/utils/mockCanvi";
import { ConsultDynamicPixListUseCase } from "./consultDynamicPixListUseCase";

jest.mock("@/lib/axiosClient");

describe("check pix list dynamic usecase", () => {
  let sut: ConsultDynamicPixListUseCase;

  beforeEach(() => {
    sut = new ConsultDynamicPixListUseCase(axiosClient);
  });

  it("should be able to check pix list", async () => {
    axiosClient.post.mockResolvedValue({
      data: mockConsultDynamicPixListResponse,
    });

    const response = await sut.execute(mockConsultDynamicPixListRequest);

    expect(response).toEqual(mockConsultDynamicPixListResponse);
  });
});
