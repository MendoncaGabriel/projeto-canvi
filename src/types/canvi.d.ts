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

// Devolution
export interface CreatePixReturnRequest {
  id_invoice_pix: string;
  identificador_externo: string;
  descricao: string;
  texto_instrucao: string;
}

export interface CreatePixReturnResponse {
  id: number;
  //não consegui idendificar o retorno na documentação ou na consulta
}

// check pix list
export interface CheckPixListRequest {
  data_inicial: string;
  data_final: string;
}

export interface CheckPixListResponse {
  code: number;
  mensagem: string;
  data: {
    sigla: string;
    nome_servico: string;
    id: number;
    id_transacao: number;
    valor_bruto: string;
    valor_taxa: string;
    data_criacao: string;
    data_efetivacao: string | null;
    data_baixa: string | null;
    nome_situacao: string;
    id_pagador: number | null;
    nome_pagador: string | null;
    codigo_rastreio: string | null;
    texto_instrucao: string;
    identificador_externo: string;
    soma_saldo: string;
    id_empresa: number;
    texto_descricao: string;
    nome_banco: string | null;
    codigo: string | null;
    agencia: string | null;
    id_recebedor: number | null;
    nome_recebedor: string | null;
    ativo_liberar_devolucao: number;
  }[];
}
