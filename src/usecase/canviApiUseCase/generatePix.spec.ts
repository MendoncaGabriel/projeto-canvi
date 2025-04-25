import { GeneratePixUseCase } from './generatePixUseCase';
import { createAxiosClient } from '@/lib/axiosClient';
import { mockGeneratePixRequest, mockGeneratePixResponse } from '@/test/utils/mockCanvi';
import { AxiosInstance } from 'axios';

jest.mock('@/lib/axiosClient'); 

describe("Generate Pix UseCase", () => {
  let sut: GeneratePixUseCase;
  let mockedAxios: jest.Mocked<AxiosInstance>;

  beforeEach(() => {
    mockedAxios = {
      post: jest.fn()
    } as unknown as jest.Mocked<AxiosInstance>;

    (createAxiosClient as jest.Mock).mockReturnValue(mockedAxios);

    sut = new GeneratePixUseCase(mockedAxios);
  });

  it("deve chamar a API corretamente", async () => {
    mockedAxios.post.mockResolvedValue({
      data: mockGeneratePixResponse
    });

    const result = await sut.execute(mockGeneratePixRequest);

    expect(result).toEqual(mockGeneratePixResponse);
    expect(mockedAxios.post).toHaveBeenCalledWith("/pix", mockGeneratePixRequest);
  });
});
