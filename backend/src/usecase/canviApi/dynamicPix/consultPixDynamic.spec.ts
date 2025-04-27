import { mockConsultPixDynamicRequest, mockConsultPixDynamicResponse } from "@/test/utils/mockCanvi";
import { ConsultPixDynamicUseCase } from "./consultPixDynamicUseCase";
import axiosClient from "@/__mocks__/axiosClient";

jest.mock("@/lib/axiosClient");

describe("consult pix dynamic usecase", () => {
  let sut: ConsultPixDynamicUseCase;

  beforeEach(() => {
    sut = new ConsultPixDynamicUseCase(axiosClient);
  });

  it("should be able consult pix", async () => {
    axiosClient.post.mockResolvedValueOnce({
      data: mockConsultPixDynamicResponse,
    });

    const result = await sut.execute(mockConsultPixDynamicRequest);

    expect(result).toEqual(mockConsultPixDynamicResponse)
  });
});
