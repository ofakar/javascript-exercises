const findTheOldest = arr => {
  const currentYear = new Date().getFullYear();

  const sortFunc = (a, b) => {
    const ageA = (a.yearOfDeath ?? currentYear) - a.yearOfBirth;
    const ageB = (b.yearOfDeath ?? currentYear) - b.yearOfBirth;
    console.log(ageA, ageB);
    return ageB - ageA;
  };
  arr.sort(sortFunc);
  return arr[0];
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const oldest = findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
