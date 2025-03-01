import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
  try {
    //Recupera os valores de acordo com o id e usa o método delete
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });
    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível remover o agendamento");
  }
}
