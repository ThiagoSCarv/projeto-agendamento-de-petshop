const openButton = document.querySelector(".open-modal")
const closeButton = document.querySelector(".close-modal")
const title = document.querySelector(".title")
const schedulesByPeriod = document.querySelector(".schedules-by-period")

openButton.addEventListener("click", () => {
  const modalId = openButton.getAttribute('data-modal');
  const modal = document.getElementById(modalId)

  modal.showModal();
  title.classList.add("hide-schedules")
  schedulesByPeriod.classList.add("hide-schedules")
  openButton.classList.add("hide-button")
})

closeButton.addEventListener("click", () => {
  const modalId = openButton.getAttribute('data-modal');
  const modal = document.getElementById(modalId)

  modal.close()
  title.classList.remove("hide-schedules")
  schedulesByPeriod.classList.remove("hide-schedules")
  openButton.classList.remove("hide-button")
})