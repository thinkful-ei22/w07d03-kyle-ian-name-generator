const generators = require('./generators');

function nameGenerator(firstName, lastName, generator){
  const newFirstName = generators[generator].firstName[firstName[0]];
  const newLastName = generators[generator].lastName[lastName[0]];
  const displayName = generators[generator].displayName;
  const displayImg = generators[generator].displayImg;

  return {newFirstName, newLastName, displayName, displayImg};
}

module.exports = {nameGenerator};