import axiosClient from "@/__mocks__/axiosClient";
import { SimulateWriteOffUseCase } from "./simulateWriteOffUseCase";
import {
  mockSimulateWriteOffRequest,
  mockSimulateWriteOffResponse,
} from "@/test/utils/mockCanvi";

jest.mock("@/lib/axiosClient");

describe("simulate Write Off", () => {
  let sut: SimulateWriteOffUseCase;

  beforeEach(() => {
    sut = new SimulateWriteOffUseCase(axiosClient);
  });

  it("should be able simulate write off", async () => {
    axiosClient.post.mockResolvedValueOnce({
      data: mockSimulateWriteOffResponse,
    });

    const response = await sut.execute(mockSimulateWriteOffRequest);
    expect(response).toEqual(mockSimulateWriteOffResponse);
  });
});
