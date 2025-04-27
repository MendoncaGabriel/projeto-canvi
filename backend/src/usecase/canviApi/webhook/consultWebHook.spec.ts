import axiosClient from "@/__mocks__/axiosClient";
import { ConsultWebHookUseCase } from "./consultWebHookUseCase";
import {
  mockConsultWebHookRequest,
  mockConsultWebHookResponse,
} from "@/test/utils/mockCanvi";

jest.mock("@/lib/axiosClient");

describe("consult webhook usecase", () => {
  let sut: ConsultWebHookUseCase;

  beforeEach(() => {
    sut = new ConsultWebHookUseCase(axiosClient);
  });

  it("should be able consult webhook", async () => {
    axiosClient.post.mockResolvedValue({
      data: mockConsultWebHookResponse,
    });

    const reault = await sut.execute(mockConsultWebHookRequest);
    expect(reault).toEqual(mockConsultWebHookResponse);
  });
});
