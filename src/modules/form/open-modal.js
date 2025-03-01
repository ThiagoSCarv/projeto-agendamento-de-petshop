const openButton = document.querySelector(".open-modal")
const closeButton = document.querySelector(".close-modal")
const title = document.querySelector(".title")
const schedulesByPeriod = document.querySelector(".schedules-by-period")
const dialog = document.querySelector('#new-schedule-modal')

openButton.addEventListener("click", () => {
  const modalId = openButton.getAttribute('data-modal');
  const modal = document.getElementById(modalId)

  modal.showModal();
  title.classList.add("hide-schedules")
  schedulesByPeriod.classList.add("hide-schedules")
  openButton.classList.add("hide-button")
})

dialog.addEventListener('click', function (event) {
  if (event.target.classList.contains('close')) {
    dialog.close()
    title.classList.remove("hide-schedules")
    schedulesByPeriod.classList.remove("hide-schedules")
    openButton.classList.remove("hide-button")
  }
})
