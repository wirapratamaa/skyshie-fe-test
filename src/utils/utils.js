export const getClientTime = (timeUtc, timeZone) => {
  const convertedTime = new Date(timeUtc);

  const day = convertedTime?.toLocaleString("en-US", {
    day: "2-digit",
    timeZone,
  });
  const month = convertedTime?.toLocaleString("en-US", {
    month: "long",
    timeZone,
  });
  const year = convertedTime?.toLocaleString("en-US", {
    year: "numeric",
    timeZone,
  });

  return day + " " + month + " " + year;
};

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const options = [
  {
    value: "very-high",
    label: "Very High",
    className: "bg-[#ED4C5C]",
    dataCy: "very-high",
  },
  { value: "high", label: "High", className: "bg-[#F8A541]", dataCy: "high" },
  {
    value: "medium",
    label: "Medium",
    className: "bg-[#00A790]",
    dataCy: "medium",
  },
  { value: "low", label: "Low", className: "bg-[#428BC1]", dataCy: "low" },
  {
    value: "very-low",
    label: "Very Low",
    className: "bg-[#8942C1]",
    dataCy: "very-low",
  },
];

export const findSelection = (options, value) => {
  return options.find((item) => item.value === value);
};
