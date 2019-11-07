const leftJoin = (item1, item2) => {
  const results = [];
  for(let [key, value] of Object.entries(item1)) {
    (item2[key]) ? results.push([key, value, item2[key]])
      : results.push([key, value, null]);
  }
  return results;
  
};

module.exports = leftJoin;