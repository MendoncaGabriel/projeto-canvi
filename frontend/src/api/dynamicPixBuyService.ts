import { ClientAxios } from "@/lib/clientAxios";

export async function getDynamicPixbuy(
  { value, cpf, email, userName }: 
  { value: number, cpf: string, userName: string, email: string }
) {
  const body = {
    value,
    description: "Compra de produto",
    cliente: {
      nome: userName,
      tipo_documento: "cpf",
      numero_documento: cpf,
      "e-mail": email,
    },
  };

  const { data } = await ClientAxios.post(`/api/pix/buy`, body);
  return data;
}
