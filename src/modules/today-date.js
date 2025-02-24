import dayjs from "dayjs"

const dateHome = document.querySelectorAll(".date-home")

export function loadTodayDate() {
  dateHome.forEach(date => {
    const minDate = date.setAttribute('min', dayjs().format('YYYY-MM-DD'))
    const todayDate = date.setAttribute('value', dayjs().format('YYYY-MM-DD'))
    return minDate, todayDate
  });
}
