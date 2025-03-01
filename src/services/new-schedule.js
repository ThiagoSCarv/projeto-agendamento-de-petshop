import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, clientName, petName, telphone, description, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        clientName, 
        petName,
        telphone, 
        description, 
        when
      }),
    });

    alert("Agendamento realizado com sucesso")
  } catch (error) {
    alert("Não foi possível realizar o agendamento!!!")
    console.log(error)
  }
}