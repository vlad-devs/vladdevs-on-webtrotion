const dateOptions = {
  date: {
    locale: "en",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
}

const dateFormat = new Intl.DateTimeFormat(dateOptions.date.locale, dateOptions.date.options);

export function getFormattedDate(
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions
) {
  //console.log("DATE: ", date);
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(dateOptions.date.locale, {
      ...(dateOptions.date.options as Intl.DateTimeFormatOptions),
      ...options,
    });
  }

  return dateFormat.format(new Date(date));
}

export function getFormattedDateWithTime(date: string | number | Date) {
  const ObjDate = new Date(date);

  // Check if the date string contains a 'T' or if it's a number or Date object
  let showTime = false;
  if (typeof date === 'string') {
    showTime = date.includes('T');
  } else {
    // For number or Date types, we assume time might be relevant
    showTime = true;
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...(showTime && { hour: '2-digit', minute: '2-digit', hour12: true })
  };

  const formattedDate = ObjDate.toLocaleString('en-US', options);
  return formattedDate;
}


