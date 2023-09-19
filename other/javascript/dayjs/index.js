import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const startAt = (year, month, day) => {
  return dayjs()
    .tz()
    .year(year)
    .month(month - 1)
    .date(day)
    .startOf("day")
    .valueOf();
};

const endAt = (year, month) => {
  return dayjs()
    .year(year)
    .month(month - 1)
    .endOf("month")
    .valueOf();
};

console.log(startAt(2023, 9, 9));
// console.log(dayjs(endAt(2022, 10)).tz().format("YYYY/MM/DD HH:mm:ss"));
// console.log(endAt(2018, 8));
// console.log(dayjs(1538319599999).year());
// console.log(dayjs(1538319599999).month());
// console.log(new Date("2023/09").valueOf());
// console.log(dayjs(1533049200000));
console.log(dayjs(1694790000000).tz().format("YYYY/MM/DD HH:mm:ss"));
