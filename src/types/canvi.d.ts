// token
export interface GenerateTokenResponse {
  code: number;
  message: string;
  token: string;
}
export interface GeneratePixRequest {
  valor: number;
  vencimento?: string;
  descricao: string;
  tipo_transacao: "pixCashin" | "pixCashinSemStatus";
  texto_instrucao: string;
  identificador_externo: string;
  identificador_movimento: string;
  enviar_qr_code?: boolean;
  tag: string[];
  cliente?: {
    nome: string;
    tipo_documento: string;
    numero_documento: string;
    "e-mail": string;
  };
}

// Generate pix
export interface GeneratePixResponse {
  code: number;
  mensagem: string;
  data: {
    id_invoice_pix: number;
    valor: string;
    vencimento: string;
    id_cobrador: string;
    nome_cobrador: string;
    brcode: string;
    status: string;
    criacao: string;
    qrcode: string;
    tx_id: string;
  };
}

// Consult pix
export interface ConsultPixRequest {
  id_invoice_pix: number;
}
export interface ConsultPixResponse {
  code: number;
  mensagem: string;
  data: {
    id: number;
    valor: string;
    vencimento: string;
    id_cobrador: string;
    nome_cobrador: string;
    juros: string;
    multa: string;
    brcode: string;
    status: string;
    criacao: string;
    data_efetivacao: string | null;
    id_pagador: string | null;
    nome_pagador: string | null;
    numero_conta: string | null;
    tipo_conta: string | null;
    agencia_conta: string | null;
    codigo_banco: string | null;
    nome_banco: string;
    codigo_rastreio: string | null;
    qrcode: {
      type: string;
      data: number[];
    };
    tx_id: string;
  };
}