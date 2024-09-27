export function getCurrentDate() {
  const today = new Date();

  // Array of day names and month names
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Get the current day, month, year, and day name
  const day = today.getDate();
  const month = today.getMonth(); // Month is zero-based
  const year = today.getFullYear();
  const dayName = dayNames[today.getDay()]; // Get the day name

  // Format the date
  const formattedDate = `${dayName}, ${day < 10 ? '0' + day : day} ${
    monthNames[month]
  }, ${year}`;

  return formattedDate;
}

getCurrentDate();
