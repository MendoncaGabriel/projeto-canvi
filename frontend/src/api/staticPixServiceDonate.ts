import { ClientAxios } from "@/lib/clientAxios";

export async function getStaticPixDonate() {
  const { data } = await ClientAxios.post(`/api/pix/donate`, {
    value: 0,
    description: "teste",
  });
  return data;
}
