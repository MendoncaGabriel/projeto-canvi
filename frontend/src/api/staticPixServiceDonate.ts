import { ClientAxios } from "@/lib/clientAxios";

export async function getStaticPixDonate() {
  const { data } = await ClientAxios.post(`/api/pix/donate`, {
    value: 100,
    description: "teste",
  });
  return data;
}
