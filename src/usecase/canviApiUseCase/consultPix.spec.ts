import { mockConsultPixRequest, mockConsultPixResponse } from "@/test/utils/mockCanvi";
import { ConsultPixUseCase } from "./consultPixUseCase";
import axiosClient from "@/__mocks__/axiosClient";

jest.mock("@/lib/axiosClient");

describe("consult pix usecase", () => {
  let sut: ConsultPixUseCase;

  beforeEach(() => {
    sut = new ConsultPixUseCase(axiosClient);
  });

  it("should be able consult pix", async () => {
    axiosClient.post.mockResolvedValueOnce({
      data: mockConsultPixResponse,
    });

    const result = await sut.execute(mockConsultPixRequest);

    expect(result).toEqual(mockConsultPixResponse)
  });
});
