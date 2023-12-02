import resultCases from "./resultCases";

const calcMyPercent = async (prevData, myNum) => {
  let total = 1;
  let myLank = 1;
  for (const key in prevData) {
    total += prevData[key];
    if (parseInt(key, 10) > myNum) {
      if (total === 2) {
        myLank = 1;
      } else {
        myLank += prevData[key];
      }
    }
  }
  resultCases(prevData, myNum);
  const myPercent = (myLank / total) * 100;
  return `${myPercent < 1 ? parseFloat(myPercent).toPrecision(1):Math.floor(myPercent)}%`;
};

export default calcMyPercent;
