function getUserObject(firstName, lastName, age) {
  return {
    age,
    name: `${firstName} ${lastName}`,
  };
}

export default getUserObject;
