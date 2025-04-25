jest.mock('@/lib/axiosClient', () => ({
  createAxiosClient: jest.fn(() => require('@/__mocks__/axiosClient').default),
}));
