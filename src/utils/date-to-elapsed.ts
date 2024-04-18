export default function dateToElapsed(date: string): string {
  const currentDate = new Date();
  const [day, month, year] = date.split("-").map(Number);

  const inputDate = new Date(year, month - 1, day);
  const elapsedMilliseconds = currentDate.getTime() - inputDate.getTime();

  const elapsedYears = Math.floor(
    elapsedMilliseconds / (1000 * 60 * 60 * 24 * 365)
  );
  const elapsedMonths = Math.floor(
    elapsedMilliseconds / (1000 * 60 * 60 * 24 * 30)
  );

  if (elapsedYears > 0) {
    return `${elapsedYears} ${elapsedYears === 1 ? "year" : "years"} ago`;
  } else if (elapsedMonths > 0) {
    return `${elapsedMonths} ${elapsedMonths === 1 ? "month" : "months"} ago`;
  } else {
    return "Less than a month ago";
  }
}
