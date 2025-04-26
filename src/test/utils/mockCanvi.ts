import {
  ConsultPixRequest,
  ConsultPixResponse,
  CreatePixReturnRequest,
  CreatePixReturnResponse,
  GeneratePixRequest,
  GeneratePixResponse,
} from "@/types/canvi";

export const mockGeneratePixResponse: GeneratePixResponse = {
  code: 200,
  mensagem: "Invoice PIX gerado",
  data: {
    id_invoice_pix: 58378,
    valor: "1.40",
    vencimento: "2025-04-28T18:45:00.100+00:00",
    id_cobrador: "07062290000147",
    nome_cobrador: "EMPRESA 7",
    brcode:
      "00020101021226860014BR.GOV.BCB.PIX2564spi-h.itau.com.br/pix/qr/v2/c194eea6-85b3-47c7-858f-c83571a96f385204000053039865802BR5911Trocados 016009SAO PAULO62070503***630477A9",
    status: "created",
    criacao: "2025-04-24T16:56:07.100+00:00",
    qrcode:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6AQAAAACgl2eQAAACu0lEQVR4Xu2XzXHeMAxEyUaI/rtIKUQjZPYtnVjWwZODhVxEfz8S8DwDAwtAbvv786vdLbfzAue8wDkvcM6/AbO1vnPnihV79dx7RdpYB8iSM2Ybsfr5zAmWlQC3IvrWS2bd/mFKAQXX1xgyrhZLkf4HQOXhpQrhcOpqAb0SuShQOYYThrEQQJ95P3dV3/0/DHCWMkSIClfKHSM+7FXAlLNFnm+SpTsxhsqAIbdCkyHXID8WTymQVq3sU5HqQtJtjTFSCGCXWaI9H5M4laxdCDgtOBXgSZGTpu6pAxSZysU471bvIjw1MV9VwLRM5aFjlR+2i7z5WaznAbmULISLN5nrdFGUAv0sVM8uelZRJ6OkEDizm+qobOEmQjaBqwzYnp4OU7LVQOVa0i0EHJ5Ew3YHmnFGCL9aBcCQIKVGvcN6TQo1L3/F4wDF0cigQIP4SFIw4SsB9YrvmCGNpy365tI4BYA6xxCFMnRqVwqw06QSffOwIx+pSxesDFCVtOApDrENdqovohAgSSjWSXKYs7NcvlTzYcBy0fCeNE0TslHwZYAUAMlGoXcFUaft+dGJsQywaLdHSCdLgyMsCgEVRl3izpFRqyV572uxHgcUDqudXHUN9oF4ZIpKQBe0L94wHeyUTpxlANEhEa80eP9TrIFeCLDNOx82WT8O+G+QBYAbl2qRIS8SuujSvBWAddJsZIwOWpfyFQJkieqEM8aTnn8uxXoe0E1njnmWWTIi0XAl4HVGxQiSmHU/jnqqABtXMLw0zzYTbH4Z5gUAR0KlefvHQhmkrBIgIqXp1GjiE8BQKwSQiGN0bK4XF6MUoFGTxqFrF/lysahWKaBedXSBZpy82MWAVMszlhcsD31qnVoARs06SREDfWiGKW+fiXoeoDIYVR8a2c2r8TFJWBXw3XmBc17gnBc45weA34wOU/E0HN54AAAAAElFTkSuQmCC",
    tx_id: "CDC00000000000000000000009002",
  },
};

export const mockGeneratePixRequest: GeneratePixRequest = {
  valor: 140,
  vencimento: "2025-04-28T18:45:00",
  descricao: "Cobrança de teste",
  tipo_transacao: "pixCashin",
  texto_instrucao: "Instruções",
  identificador_externo: "791defb6-2cfb-4ce7-9b3b-0c3927fd6b24",
  identificador_movimento: "f4ab0c19-0f58-4bce-ba83-c5c9ce05cbb14",
  tag: ["tag1", "tag2"],
  cliente: {
    nome: "Maria Eduarda",
    tipo_documento: "cpf",
    numero_documento: "744.674.080-96",
    "e-mail": "eduarda@gmail.com",
  },
};

export const mockConsultPixRequest: ConsultPixRequest = {
  id_invoice_pix: 58377,
};

export const mockConsultPixResponse: ConsultPixResponse = {
  code: 200,
  mensagem: "Dados do Pix",
  data: {
    id: 58377,
    valor: "1.40",
    vencimento: "2025-04-28 18:45:00",
    id_cobrador: "07062290000147",
    nome_cobrador: "EMPRESA 7",
    juros: "0.00",
    multa: "0.00",
    brcode:
      "00020101021226860014BR.GOV.BCB.PIX2564spi-h.itau.com.br/pix/qr/v2/9938ecd8-e88d-4255-b2b9-62a1493b13c05204000053039865802BR5911Trocados 016009SAO PAULO62070503***6304C1B6",
    status: "created",
    criacao: "2025-04-24 16:47:43",
    data_efetivacao: null,
    id_pagador: null,
    nome_pagador: null,
    numero_conta: null,
    tipo_conta: null,
    agencia_conta: null,
    codigo_banco: null,
    nome_banco: "******",
    codigo_rastreio: null,
    qrcode: {
      type: "Buffer",
      data: [65, 65, 65, 83, 85, 86, 79, 82, 75, 53, 67, 89, 73, 73, 61],
    },
    tx_id: "CDC00000000000000000000009001",
  },
};

export const mockCreatePixReturnRequest: CreatePixReturnRequest = {
  id_invoice_pix: "58378",
  identificador_externo: "d976da2c-e7ea-462a-91c9-0b549c96bb69",
  descricao: "Devolução de teste",
  texto_instrucao: "Instrução...",
};

export const mockCreatePixReturnResponse: CreatePixReturnResponse = {
  id: 58377,
};
