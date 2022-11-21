import "moment/dist/locale/pt-br";

import moment from "moment";

moment.locale("pt-br");

export function formatDate(date: string | Date, format = "HH:mm") {
  return moment(date).format(format);
}

export function getNextDate(date: string | Date) {
  return moment(date).add({ days: 1 }).toDate();
}

export function getPreviousDate(date: string | Date) {
  return moment(date).subtract({ days: 1 }).toDate();
}

export function getInitialMatchesDate() {
  const currentDate = moment(new Date()).format("yy-MM-DD");

  const worldCupStartDate = new Date("2022-11-20 16:00");

  if (moment(currentDate).isBefore(worldCupStartDate)) {
    return worldCupStartDate;
  }

  return currentDate;
}
