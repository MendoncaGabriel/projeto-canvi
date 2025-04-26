import axiosClient from "@/__mocks__/axiosClient";
import { ConsultStaticPixListUseCase } from "./consultStaticPixListUseCase";
import {
  mockConsultStaticPixListRequest,
  mockConsultStaticPixListResponse,
} from "@/test/utils/mockCanvi";

jest.mock("@/lib/axiosClient");

describe("consult static pix list usecase", () => {
  let sut: ConsultStaticPixListUseCase;

  beforeEach(() => {
    sut = new ConsultStaticPixListUseCase(axiosClient);
  });

  it("should be able to consult static pix list", async () => {
    axiosClient.post.mockResolvedValueOnce({
      data: mockConsultStaticPixListResponse,
    });

    const response = await sut.execute(mockConsultStaticPixListRequest);

    expect(response).toEqual(mockConsultStaticPixListResponse);
  });
});
