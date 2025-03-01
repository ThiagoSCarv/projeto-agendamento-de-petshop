import dayjs from "dayjs";

const periodMorning = document.querySelector('#period-morning')
const periodAfternoon = document.querySelector('#period-afternoon')
const periodNight = document.querySelector('#period-night')

export function showSchedules([schedules]) {

  periodMorning.innerHTML = '';
  periodAfternoon.innerHTML = '';
  periodNight.innerHTML = '';

  try {
    schedules.forEach(schedule => {
      const newLi = document.createElement('li')
      newLi.setAttribute('data-id', schedule.id)
  
      const newDiv = document.createElement('div')
  
      const scheduleHours = document.createElement('strong')
      scheduleHours.classList.add('schedule-hours', 'ff-inter', 'fs-md', 'lh-lg', 'fw-bold')
      scheduleHours.textContent = dayjs(schedule.when).format('HH:mm')
      
      const petName = document.createElement('span')
      petName.classList.add('pet-name', 'ff-inter', 'fs-md', 'lh-lg', 'fw-bold')
      petName.textContent = schedule.petName

  
      const petOwner = document.createElement('span')
      petOwner.classList.add('pet-owner', 'ff-inter', 'fs-md', 'lh-lg', 'fw-medium')
      petOwner.textContent = `/ ${schedule.clientName}`
  
      newDiv.append(scheduleHours, petName, petOwner)
  
      const serviceDescription = document.createElement('p')
      serviceDescription.classList.add('service-description', 'ff-inter', 'fs-md', 'lh-lg', 'fw-medium')
      serviceDescription.textContent = schedule.description 
  
      const cancel = document.createElement('a')
      cancel.classList.add('cancel', 'ff-inter', 'ff-sm', 'lh-md', 'fw-medium')
      cancel.setAttribute('href', '#')
      cancel.textContent = 'Remover agendamento'
  
      newLi.append(newDiv, serviceDescription, cancel)
  
      const hour = dayjs(schedule.when).hour()
  
      if (hour <= 12) {
        periodMorning.appendChild(newLi)
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(newLi)
      } else {
        periodNight.appendChild(newLi)
      }
    });
    
  } catch (error) {
    console.log(error)
    alert('Não foi possível exibir os agendamentos')
  }
  
}