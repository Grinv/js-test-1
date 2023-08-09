// Функция для получения времени до Нового Года
const ONE_DAY = 1000 * 60 * 60 * 24;

const MOUNTHS = 1000 * 60 * 60 * 24 * 30;
const HOURS = 1000 * 60 * 60;
const MINUTES = 1000 * 60;
const SECONDS = 1000;

const countdown = document.getElementById("countdown");

const dateNow = new Date();
const currentYear = dateNow.getFullYear();
const currentMonth = dateNow.getMonth() + 1;
const newYear = new Date(currentYear + 1, 0, 1);
const diff = newYear - dateNow;

function declOfNum(n, text_forms) {
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 == 1) {
    return text_forms[0];
  }
  return text_forms[2];
}

function getNumberOfDaysInMonth(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);
  const diifInTime = date2.getTime() - date1.getTime();
  const diffInDays = Math.round(diifInTime / ONE_DAY);
  return diffInDays;
}

function daysInMonth(year, month) {
  let array = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return month === 2 && DateExt.isLeapYear(year) ? 29 : array[month - 1];
}

function getTimeUntilNewYear() {
  const now = new Date();
  const diff = newYear - now;
  const endDay = daysInMonth(now.getFullYear(), now.getMonth());

  const months = Math.floor(diff / MOUNTHS);
  const hours = Math.floor(diff / HOURS) % 24;
  const minutes = Math.floor(diff / MINUTES) % 60;
  const seconds = Math.floor(diff / SECONDS) % 60;
  const days = getNumberOfDaysInMonth(
    now,
    new Date(now.getFullYear(), now.getMonth(), endDay)
  );

  return {
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}

function printTimeUntilNewYear(time) {
  return `${time.months} ${declOfNum(time.months, [
    "месяц",
    "месяца",
    "месяцев",
  ])} 
  ${time.days} ${declOfNum(time.days, ["день", "дня", "дней"])} 
  ${time.hours} ${declOfNum(time.months, ["час", "часов", "часа"])}
  ${time.minutes} ${declOfNum(time.minutes, ["минута", "минуты", "минут"])} 
  ${time.seconds} ${declOfNum(time.months, ["секунд", "секунда", "секунды"])}`;
}

function updateCountdown() {
  const countDownTimer = printTimeUntilNewYear(getTimeUntilNewYear());
  countdown.textContent = countDownTimer;
}

const timeUntilNY = getTimeUntilNewYear();

const interval = setInterval(updateCountdown, 1000);

const IsNewYear =
  timeUntilNY.seconds <= 0 &&
  timeUntilNY.minutes <= 0 &&
  timeUntilNY.hours <= 0 &&
  timeUntilNY.days <= 0 &&
  timeUntilNY.months <= 0;

// Обновление информации
if (IsNewYear) {
  setTimeout(() => {
    clearInterval(interval);
    alert("stop");
  }, diff);
} else {
  setInterval(updateCountdown, 1000);
}