function getBusinessAddress(business) {
  const { number, street, zipCode } = business.address;

  return `${street}, number ${number}, ${zipCode}`;
}

export default getBusinessAddress;
