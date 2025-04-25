import { AxiosInstance } from 'axios';

const axiosClient: jest.Mocked<AxiosInstance> = {
  post: jest.fn(),
  get: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
  patch: jest.fn(),
} as unknown as jest.Mocked<AxiosInstance>;

export default axiosClient;
