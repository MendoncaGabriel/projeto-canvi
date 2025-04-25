import { AxiosInstance } from "axios";
import { ConsultPixUseCase } from "./consultPixUseCase";

describe("consult pix usecase", () => {
  let sut: ConsultPixUseCase;
  let mockedAxios: jest.Mocked<AxiosInstance>;

  beforeEach(() => {
    mockedAxios = {
      post: jest.fn()
    } as unknown as jest.Mocked<AxiosInstance>;

    sut = new ConsultPixUseCase(mockedAxios);
  });
})