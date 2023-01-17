// declare variables from Google Sheet
const questionSix = e.values[6];

const Risk = [
  { label: "a real gambler", value: 4 },
  {
    label: "willing to take risks after completing adequate research",
    value: 3,
  },
  { label: "Cautious", value: 2 },
  { label: "plays it safe, avoids risk", value: 1 },
];

const getRiskScore = (str) => {
  return Risk.find((e) => e.label === str)?.value || 0;
};

console.log("Risk Score: ", getRiskScore(questionSix));
