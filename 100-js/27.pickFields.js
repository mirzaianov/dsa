function pickFields(data, fields) {
  const res = {};

  for (const f of fields) {
    if (data[f]) {
      res[f] = data[f];
    }
  }

  return res;
}

export default pickFields;
