import {
  CheckPixListDynamicRequest,
  CheckPixListDynamicResponse,
  ConsultPixDynamicRequest,
  ConsultPixDynamicResponse,
  ConsultPixStaticDocumentRequest,
  ConsultPixStaticDocumentResponse,
  CreatePixReturnDynamicRequest,
  CreatePixReturnDynamicResponse,
  CreatePixReturnStaticRequest,
  CreatePixReturnStaticResponse,
  GeneratePixDynamicRequest,
  GeneratePixDynamicResponse,
  GeneratePixStaticRequest,
  GeneratePixStaticResponse,
} from "@/types/canvi";

export const mockGeneratePixDynamicResponse: GeneratePixDynamicResponse = {
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

export const mockGeneratePixDynamicRequest: GeneratePixDynamicRequest = {
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

export const mockConsultPixDynamicRequest: ConsultPixDynamicRequest = {
  id_invoice_pix: 58377,
};

export const mockConsultPixDynamicResponse: ConsultPixDynamicResponse = {
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

export const mockCreatePixReturnDynamicRequest: CreatePixReturnDynamicRequest =
  {
    id_invoice_pix: "58378",
    identificador_externo: "d976da2c-e7ea-462a-91c9-0b549c96bb69",
    descricao: "Devolução de teste",
    texto_instrucao: "Instrução...",
  };

export const mockCreatePixReturnDynamicResponse: CreatePixReturnDynamicResponse =
  {
    id: 58377,
  };

export const mockCheckPixListDynamicRequest: CheckPixListDynamicRequest = {
  data_inicial: "2025-04-22",
  data_final: "2025-04-25",
};

export const mockCheckPixListDynamicResponse: CheckPixListDynamicResponse = {
  code: 200,
  mensagem: "Consulta PIX",
  data: [
    {
      sigla: "invoicePix",
      nome_servico: "PIX COBRANÇA",
      id: 58376,
      id_transacao: 9000,
      valor_bruto: "1.40",
      valor_taxa: "0.00",
      data_criacao: "2025-04-24 16:47:13",
      data_efetivacao: null,
      data_baixa: null,
      nome_situacao: "FALHA",
      id_pagador: null,
      nome_pagador: null,
      codigo_rastreio: null,
      texto_instrucao: "Instruções",
      identificador_externo: "791defb6-2cfb-4ce7-9b3b-0c3927fd6b22",
      soma_saldo: "-36.71",
      id_empresa: 67,
      texto_descricao: "FALHA",
      nome_banco: null,
      codigo: null,
      agencia: null,
      id_recebedor: null,
      nome_recebedor: null,
      ativo_liberar_devolucao: 0,
    },
  ],
};

export const mockGeneratePixStaticRequest: GeneratePixStaticRequest = {
  valor: 100,
  descricao: "Cobrança de teste",
  tipo_transacao: "pixStaticCashin",
  texto_instrucao: "Instruções",
  identificador_externo: "733c0293-ec90-448e-83bc-d6c5ee557f4a",
  identificador_movimento: "da7956af-de73-4746-b43b-c38fb463648b",
  enviar_qr_code: true,
  tag: ["tag1", "tag2"],
};

export const mockGeneratePixStaticResponse: GeneratePixStaticResponse = {
  code: 200,
  mensagem: "Pix Estático Gerado",
  data: {
    id_invoice_pix_documento: 151,
    valor: "1.00",
    id_cobrador: "07062290000147",
    nome_cobrador: "EMPRESA 7",
    brcode:
      "00020126790014BR.GOV.BCB.PIX0136868307c2-53c2-4a86-aaa8-f1a66a2fd49f0217Cobranca de teste52040000530398654041.005802BR5911Trocados 016009SAO PAULO62290525CSC00000000000000000001516304A9A2",
    criacao: "2025-04-25T23:06:38.100+00:00",
    qrcode:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6AQAAAACgl2eQAAACx0lEQVR4Xu2WS3LkIBAF4SJw/1vMUeAiMJnFhCX3wjELq1bC7ZYE2REv6tVHZf+8/pTPnY/1Ame9wFkvcNb/AaOUuuqee7U+V6lxdTMRmHzmnqNPt1vdo4/qZiYQj6PvuVprFaivejZTAeQZHHTuvfowUunAsWrpENiX8jzAR6JDoKq27fOD724+DJif83N9ZvXn+S8DLlOFdEUcZ/0IdGUBo9RR2fVKvKaB8gc9EZgLnzTK617B7JENYMwQsnPonUatW9I+DxiXriguq5W49BFS0wA1TsOFZaU1Wikpe0ooD2jOk1HVRhcRUvBlVgJATOicpGkXtZHM850I+GSclBunIfabWRkA91Gzc2gWH3+SChAhzeKmHqAq+u7m44B1S61aQUyW5hfvGe1WWc8DER2DBWD6cI9XEaw8YKrqaBO0ipF9mZUA0D6pnKpn/hEj37QildOAUOc4satz1pEXXSwRODkSTcQbmplBGreMeh44dhEhZjzJE4GKF51EQJHsR/Fug0W6IvJWvAkAMySUOdRivnlzN+t5wFeJdWYrTYwz5U0V5wGDOHmitm430zruM4F4tnFRMxDDyW4R9URAAqu2WUp8UMsvZBIB1ZGzy3cdI4ZXK/pIIkCG2MIQ+S9W9NLqpM8ETFob2PJNzxoC9iERkBghjylCtmgdWL3cfB4gN5RHC2Fz2dDCtsusBMBsMVjMtogRqWLxXmYlAFG4xTd+juS69WsK5QHLeWbjnAbtyOT/MisDQCTeeBrFW91ScyJgM4+SjdW8aTHcEgEX4milZmyNHK4RrTxgFJM2Kjeq2JShgi+zEgDzhC6KVYqE5jL3vboTgOEYwx0Oebc57pVb8SYBw8rp6t1GjBZSL7OyAFKEQNHOpmkTh640YGsVSYpdkT7WLTl8Bep5wByZp3gpWsoHwdsRlwj8tF7grBc46wXO+gXgL6yKJj0s1HDXAAAAAElFTkSuQmCC",
    tx_id: "CSC0000000000000000000151",
  },
};

export const mockConsultPixStaticDocumentRequest: ConsultPixStaticDocumentRequest =
  {
    id_documento: 151,
  };

export const mockConsultPixStaticDocumentResponse: ConsultPixStaticDocumentResponse =
  {
    code: 200,
    mensagem: "Dados do Pix",
    data: {
      id_documento: 151,
      valor: "1.00",
      id_cobrador: "07062290000147",
      nome_cobrador: "EMPRESA 7",
      texto_instrucao: "Instruções",
      descricao: "Cobrança de teste",
      brcode:
        "00020126790014BR.GOV.BCB.PIX0136868307c2-53c2-4a86-aaa8-f1a66a2fd49f0217Cobranca de teste52040000530398654041.005802BR5911Trocados 016009SAO PAULO62290525CSC00000000000000000001516304A9A2",
      ativo: 1,
      criacao: "2025-04-25 23:06:38",
      qrcode: {
        type: "Buffer",
        data: [100, 97, 116],
      },
    },
  };

export const mockCreatePixReturnStaticRequest: CreatePixReturnStaticRequest = {
  id_invoice_pix: 152,
  identificador_externo: 200,
  descricao: "Devolução de teste",
  texto_instrucao: "Instrução...",
};

export const mockCreatePixReturnStaticResponse: CreatePixReturnStaticResponse =
  {
    id: 152,
  };
