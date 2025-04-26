import axiosClient from "@/__mocks__/axiosClient";
import { CreatePixReturnUseCase } from "./createPixReturnUseCase";
import {
  mockCreatePixReturnRequest,
  mockCreatePixReturnResponse,
} from "@/test/utils/mockCanvi";

jest.mock("@/lib/axiosClient");

describe("devolution pix usecase", () => {
  let sut: CreatePixReturnUseCase;

  beforeEach(() => {
    sut = new CreatePixReturnUseCase(axiosClient);
  });

  it("should be able to devolution pix", async () => {
    axiosClient.post.mockResolvedValueOnce({
      data: mockCreatePixReturnResponse
    });

    const result = await sut.execute(mockCreatePixReturnRequest);
    expect(result).toEqual(mockCreatePixReturnResponse);
  });
});
