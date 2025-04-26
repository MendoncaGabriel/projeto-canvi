import axiosClient from "@/__mocks__/axiosClient";
import { ConsultPixStaticDocumentUseCase } from "./consultPixStaticDocumentUseCase";
import { mockConsultPixStaticDocumentRequest, mockConsultPixStaticDocumentResponse } from "@/test/utils/mockCanvi";

describe("consult pix static document usecase", () => {
  let sut: ConsultPixStaticDocumentUseCase;

  beforeEach(() => {
    sut = new ConsultPixStaticDocumentUseCase(axiosClient);
  });

  it("should be able consult pix static document", async () => {
    axiosClient.post.mockResolvedValueOnce({
     data: mockConsultPixStaticDocumentResponse 
    })

    const result = await sut.execute(mockConsultPixStaticDocumentRequest);

    expect(result).toEqual(mockConsultPixStaticDocumentResponse)
  });
});
