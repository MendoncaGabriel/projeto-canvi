import { GeneratePixUseCase } from './generatePixUseCase';
import { createAxiosClient } from '@/lib/axiosClient';
import axiosClient from '@/__mocks__/axiosClient'; 
import { mockGeneratePixRequest, mockGeneratePixResponse } from '@/test/utils/mockCanvi';

jest.mock('@/lib/axiosClient');

describe("generate pix useCase", () => {
  let sut: GeneratePixUseCase;

  beforeEach(() => {
    (createAxiosClient as jest.Mock).mockReturnValue(axiosClient);
    sut = new GeneratePixUseCase(axiosClient);
  });

  it("should be able generate pix", async () => {
    axiosClient.post.mockResolvedValueOnce({
      data: mockGeneratePixResponse,
    });

    const result = await sut.execute(mockGeneratePixRequest);

    expect(result).toEqual(mockGeneratePixResponse);
    expect(axiosClient.post).toHaveBeenCalledWith("/pix", mockGeneratePixRequest);
  });
});
