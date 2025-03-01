import { apiConfig } from "./api-config.js";

export async function scheduleNew({
  id,
  clientName,
  petName,
  telphone,
  description,
  when,
}) {
  try {
    //Lança os valores do input dentro da API
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //Da o parse nos valores
      body: JSON.stringify({
        id,
        clientName,
        petName,
        telphone,
        description,
        when,
      }),
    });

    alert("Agendamento realizado com sucesso");
  } catch (error) {
    alert("Não foi possível realizar o agendamento!!!");
    console.log(error);
  }
}
