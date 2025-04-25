export interface GeneratePixRequestBody {
  valor: number;
  vencimento?: string;
  descricao: string;
  tipo_transacao: 'pixCashin' | 'pixCashinSemStatus';
  texto_instrucao: string;
  identificador_externo: string;
  identificador_movimento: string;
  enviar_qr_code?: boolean;
  tag: string[];
  cliente?: {
    nome: string;
    tipo_documento: string;
    numero_documento: string;
    'e-mail': string;
  };
}

export interface GenerateTokenResponse {
  code: number;
  message: string;
  token: string
}

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


export interface DynamicPixInterface {
  generatePix(body: GeneratePixRequestBody): Promise<unknown>;
  getPixDetails(): Promise<void>;
  createPixRefund(): Promise<void>;
  listPixTransactions(): Promise<void>;
}
