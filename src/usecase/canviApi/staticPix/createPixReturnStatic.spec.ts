import axiosClient from "@/__mocks__/axiosClient";
import { CreatePixReturnStaticUseCase } from "./createPixReturnStaticUseCase";
import {
  mockCreatePixReturnStaticRequest,
  mockCreatePixReturnStaticResponse,
} from "@/test/utils/mockCanvi";

jest.mock("@/lib/axiosClient");

describe("create pix return static usecae", () => {
  let sut: CreatePixReturnStaticUseCase;

  beforeEach(() => {
    sut = new CreatePixReturnStaticUseCase(axiosClient);
  });

  it("should be able to create a pix return static", async () => {
    axiosClient.post.mockResolvedValue({
      data: mockCreatePixReturnStaticResponse,
    });
    const data = await sut.execute(mockCreatePixReturnStaticRequest);

    expect(data).toEqual(mockCreatePixReturnStaticResponse);
  });
});
